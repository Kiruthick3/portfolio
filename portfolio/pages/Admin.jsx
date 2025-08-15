import React, { useEffect, useState, useRef } from "react";
import API from "../api/api";
import PrivateRoute from "../components/PrivateRoute";

export default function ProjectsAdmin() {
  return (
    <PrivateRoute>
      <ProjectsAdminInner />
    </PrivateRoute>
  );
}

function ProjectsAdminInner() {
  const [projects, setProjects] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    fullDescription: "",
    codeLink: "",
    liveLink: "",
    futureImprovements: "",
    role: "",
    timeline: "",
    techStack: "",
    features: "",
    challenges: "",
    folderStructure: "",
  });
  const [file, setFile] = useState(null);
  const [fileScreenshots, setFileScreenshots] = useState([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const screenshotsInputRef = useRef(null);

  const formatFolderStructure = (input) => {
    return input
      .split(/\r?\n/)
      .map((line) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        if (trimmed.endsWith("/")) {
          return `<span class="folder">${trimmed}</span>`;
        } else if (trimmed.endsWith(".js")) {
          return `<span class="file-js">${trimmed}</span>`;
        } else if (trimmed.endsWith(".css")) {
          return `<span class="file-css">${trimmed}</span>`;
        } else {
          return `<span class="file">${trimmed}</span>`;
        }
      })
      .filter(Boolean);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");  
    API.defaults.headers.common["Authorization"] = null; 
    window.location.href = "/"; 
  };
  const stripHtmlTags = (html) => html.replace(/<[^>]*>/g, "");

  const splitString = (str) =>
    str.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);

  const load = async () => {
    const res = await API.get("/projects");
    setProjects(res.data);
  };

  useEffect(() => { load(); }, []);

  const handleEdit = (p) => {
    setEditing(p);
    setForm({
      title: p.title || "",
      description: p.description || "",
      fullDescription: Array.isArray(p.fullDescription) ? p.fullDescription.join("\n") : "",
      codeLink: p.codeLink || "",
      liveLink: p.liveLink || "",
      futureImprovements: Array.isArray(p.futureImprovements) ? p.futureImprovements.join("\n") : "",
      role: p.role || "",
      timeline: p.timeline || "",
      techStack: Array.isArray(p.techStack) ? p.techStack.join("\n") : "",
      features: Array.isArray(p.features) ? p.features.join("\n") : "",
      challenges: Array.isArray(p.challenges) ? p.challenges.join("\n") : "",
      folderStructure: Array.isArray(p.folderStructure)
        ? p.folderStructure.map(line => stripHtmlTags(line)).join("\n")
        : ""
    });
    setFile(null);
    setFileScreenshots([]);
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete project?")) return;
    await API.delete(`/projects/${id}`);
    load();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("fullDescription", JSON.stringify(splitString(form.fullDescription)));
      data.append("techStack", JSON.stringify(splitString(form.techStack)));
      data.append("features", JSON.stringify(splitString(form.features)));
      data.append("challenges", JSON.stringify(splitString(form.challenges)));
      data.append("futureImprovements", JSON.stringify(splitString(form.futureImprovements)));
      data.append("folderStructure", JSON.stringify(formatFolderStructure(form.folderStructure)));
      data.append("codeLink", form.codeLink);
      data.append("liveLink", form.liveLink);
      data.append("role", form.role);
      data.append("timeline", form.timeline);

      if (file) data.append("image", file);
      if (fileScreenshots.length > 0) {
        for (let i = 0; i < fileScreenshots.length; i++) {
          data.append("screenshots", fileScreenshots[i]);
        }
      }

      if (editing) {
        await API.put(`/projects/${editing._id}`, data);
      } else {
        await API.post("/projects", data);
      }

      setForm({
        title: "",
        description: "",
        fullDescription: "",
        codeLink: "",
        liveLink: "",
        futureImprovements: "",
        role: "",
        timeline: "",
        techStack: "",
        features: "",
        challenges: "",
        folderStructure: ""
      });
      setEditing(null);
      setFile(null);
      setFileScreenshots([]);

      if (fileInputRef.current) fileInputRef.current.value = "";
      if (screenshotsInputRef.current) screenshotsInputRef.current.value = "";
      await load();
    } catch (err) {
      console.error(err);
      alert("Error saving project");
    }
    setLoading(false);
  };

  return (
    <div className="admin-container">
      <button className="btn" onClick={handleLogout}> Logout</button>
      <h2>Admin — Manage Projects</h2>

      <form onSubmit={handleSubmit} className="admin-form">
        {Object.entries({
          title: "Title",
          description: "Description",
          fullDescription: "Full Description (one per line)",
          liveLink: "Live Link",
          codeLink: "Code Link",
          futureImprovements: "Future Improvements (one per line)",
          role: "Role",
          timeline: "Timeline",
          features: "Features (one per line)",
          techStack: "Tech Stack (one per line)",
          challenges: "Challenges (one per line)",
          folderStructure: "Folder Structure"
        }).map(([key, label]) => (
          <div key={key} className="form-group">
            <label>{label}</label>
            {key === "description" || key === "fullDescription" || key === "futureImprovements" || key === "features" || key === "techStack" || key === "challenges" || key === "folderStructure" ? (
              <textarea
                name={key}
                value={form[key]}
                onChange={handleInputChange}
              />
            ) : (
              <input
                name={key}
                value={form[key]}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}

        <div className="form-group">
          <label>Main Image</label>
          <input type="file" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
        </div>

        <div className="form-group">
          <label>Screenshots</label>
          <input type="file" ref={screenshotsInputRef}  multiple onChange={(e) => setFileScreenshots(e.target.files)} />
        </div>

        <div className="form-actions">
          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Submitting..."  : editing ? "Update" : "Add"}
          </button>
          {editing && (
            <button className="btn"
              type="button"
              onClick={() => {
                setEditing(null);
                setForm({
                  title: "",
                  description: "",
                  fullDescription: "",
                  codeLink: "",
                  liveLink: "",
                  futureImprovements: "",
                  role: "",
                  timeline: "",
                  techStack: "",
                  features: "",
                  challenges: "",
                  folderStructure: ""
                });
                setFile(null);
                setFileScreenshots([]);
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p._id} className="project-card">
            <img src={p.image.url} alt={p.title} />
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div className="card-actions">
              <button className="btn" onClick={() => handleEdit(p)}>Edit</button>
              <button className="btn" onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
