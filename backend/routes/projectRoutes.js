const express = require("express");
const router = express.Router();
const multer = require("multer");
const streamifier = require("streamifier");
const cloudinary = require("../config/cloudinary");
const { protect } = require("../middleware/authMiddleware");
const Project = require("../models/Project");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// GET /api/projects
router.get("/", async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

router.get("/:id", async (req, res) => {
  try {
    const projects = await Project.findById(req.params.id);
    if (!projects) return res.status(404).json({ message: "Project not found" });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

const uploadFromBuffer = (buffer,folder) => {
    return new Promise((resolve, reject) => {
        const cld_upload_stream = cloudinary.uploader.upload_stream(
            { folder: folder },
            (error, result) => {
                if (result) resolve(result);
                else reject(error);
            }
        );
        streamifier.createReadStream(buffer).pipe(cld_upload_stream);
    });
}

const parseArrayField = (field) => {
  if (!field) return [];
  try {
    // If it's already an array, just return
    if (Array.isArray(field)) return field;
    // If it's a string, try parsing JSON
    const parsed = JSON.parse(field);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    // If it's just a plain string, split by newline
    return String(field).split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  }
};

// POST /api/projects (protected) - handles file upload or image URL
router.post("/", protect, upload.fields([{name: "image", maxCount: 1},{name:"screenshots"}]), async (req, res) => {
  try {
    let imageUrl = req.body.image || "";
    let imagePublicId = "";
    let uploadedScreenshots = [];

    if (req.files["image"] && req.files["image"][0]) {
      const result = await uploadFromBuffer(
        req.files["image"][0].buffer,
        "portfolio_projects"
    );
      imageUrl = result.secure_url;
      imagePublicId = result.public_id;
    }

    if (req.files["screenshots"]) {
        uploadedScreenshots = await Promise.all(
          req.files["screenshots"].map(async (file) => {
            const result = await uploadFromBuffer(
              file.buffer,
              "portfolio_projects/screenshots"
            );
            return {
              url: result.secure_url,
              public_id: result.public_id
            };
          })
        );
    }
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      fullDescription: parseArrayField(req.body.fullDescription),
      image: {
            url: imageUrl,
            public_id: imagePublicId
        },
      screenshots: uploadedScreenshots,
      liveLink: req.body.liveLink,
      codeLink: req.body.codeLink,
      techStack: parseArrayField(req.body.techStack),
      features: parseArrayField(req.body.features),
      challenges: parseArrayField(req.body.challenges),
      futureImprovements: parseArrayField(req.body.futureImprovements),
      role: req.body.role,
      timeline: req.body.timeline,
      folderStructure: parseArrayField(req.body.folderStructure),

    });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create project" });
  }
});

router.put("/:id", protect, upload.fields([
  { name: "image", maxCount: 1 },
  { name: "screenshots" }
]), async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });

    // Update main image
    if (req.files["image"] && req.files["image"][0]) {
      if (project.imagePublicId) {
        await cloudinary.uploader.destroy(project.imagePublicId);
      }
      const result = await uploadFromBuffer(
        req.files["image"][0].buffer,
        "portfolio_projects"
      );
      project.image = {
            url: result.secure_url,
            public_id: result.public_id
        };
    } else if (req.body.image) {
      project.image = { url: req.body.image, public_id: project.image?.public_id || "" };
    }

    // Update screenshots if new ones are uploaded
    if (req.files["screenshots"]) {
      // Delete old screenshots from Cloudinary
      if (project.screenshots.length > 0) {
        await Promise.all(project.screenshots.map(s => 
          cloudinary.uploader.destroy(s.public_id)
        ));
      }
      // Upload new screenshots
      const uploadedScreenshots = await Promise.all(
        req.files["screenshots"].map(async (file) => {
          const result = await uploadFromBuffer(
            file.buffer,
            "portfolio_projects/screenshots"
          );
          return { url: result.secure_url, public_id: result.public_id };
        })
      );
      project.screenshots = uploadedScreenshots;
    }

    // Update other fields
    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;
    project.codeLink = req.body.codeLink || project.codeLink;
    project.liveLink = req.body.liveLink || project.liveLink;
    project.fullDescription = parseArrayField(req.body.fullDescription);
    project.techStack = parseArrayField(req.body.techStack);
    project.features = parseArrayField(req.body.features);
    project.challenges = parseArrayField(req.body.challenges);
    project.futureImprovements = parseArrayField(req.body.futureImprovements);
    project.role = req.body.role || project.role;
    project.folderStructure = parseArrayField(req.body.folderStructure);

    await project.save();
    res.json(project);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update project" });
  }
});


// DELETE /api/projects/:id (protected)
router.delete("/:id", protect, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
