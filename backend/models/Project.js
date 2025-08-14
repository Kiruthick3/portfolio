const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  fullDescription: {
     type: [String], 
     default: [] 
    },
  image: {
      url: String,       
      public_id: String  
    }, 
  screenshots: [
    {
      url: String,       
      public_id: String  
    }
  ],
  liveLink: String,
  codeLink: String,
  techStack: {
     type: [String], 
     default: [] 
    },
  features: {
     type: [String], 
     default: [] 
    },
  challenges: {
     type: [String], 
     default: [] 
    },
  futureImprovements: {
     type: [String], 
     default: [] 
    },
  role: String,
  timeline: String,
  folderStructure: [String],

}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
