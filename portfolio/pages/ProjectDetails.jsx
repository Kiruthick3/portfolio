import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import API from "../api/api";
import { IoClose } from "react-icons/io5";
import ScrollReveal from '../components/ScrollReveal'

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
      const fetchProjects = async () => {
          try {
              const { data } = await API.get(`/projects/${id}`);
              const parseIfString = (value) => {
        try {
          return typeof value === "string" ? JSON.parse(value) : value;
        } catch {
          return value; 
        }
      };

      setProjects({
        ...data,
        features: parseIfString(data.features),
        challenges: parseIfString(data.challenges),
        techStack: parseIfString(data.techStack),
        futureImprovements: parseIfString(data.futureImprovements),
        fullDescription: parseIfString(data.fullDescription),
        screenshots: parseIfString(data.screenshots)
      });

          } catch (error) {
              console.error("Error fetching projects:", error);
          } finally {
              setLoading(false);
          }
      };

      fetchProjects();

      window.scrollTo(0,0);
  }, [id]);

  if (!projects) {
    return <div className="not-found">⚠️ Project not found.</div>;
  }

  if (loading) return <p>Loading projects...</p>;

  return (    
    <section className="project-glass">
      <ScrollReveal direction='right'>
      <div className="hero-slice">
        <div className="hero-content">
          <h1>{projects.title}</h1>
          <p className="meta">{projects.role} · {projects.timeline}</p>
          <p className="sub">{projects.description}</p>
          <div className="hero-buttons">
            <a href={projects.liveLink} target="_blank" rel="noreferrer">🌐 Live</a>
            <a href={projects.codeLink} target="_blank" rel="noreferrer">💻 Code</a>
          </div>
        </div>
      </div>
      </ScrollReveal>

      <ScrollReveal direction='up'>
      <div className="monitor-mockup-container">
        <div className="project-screen-crop">
          <img src={projects.image.url} alt="Project Preview" className="project-screen-image"/>
        </div>
        <img src="/assets/monitor.png" alt="Monitor Frame" className="monitor-overlay" onClick={() => window.open(project.liveLink, "_blank")} />
      </div>
      </ScrollReveal>

      <ScrollReveal direction='right'>
      <div className="card glass">
        <h3>🛠 Project Description</h3>
        {projects.fullDescription?.map((desc, i) => <p key={i} className='project-des'>{desc}</p>)}
      </div>
      </ScrollReveal>

      <ScrollReveal direction='left'>
      <div className="screenshots containers">
        <h3>📸 Gallery</h3>
        <div className="scroll-gallery">
          {projects.screenshots?.map((img, i) => (
            <img key={i} src={img.url} alt="" onClick={() => setLightboxImage(img.url)} />
          ))}
        </div>
      </div>
      </ScrollReveal>

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <IoClose className="close-icon" />
          <img src={lightboxImage} alt="Enlarged" />
        </div>
      )}

      <div className="project-grid containers">

        <ScrollReveal direction='right'>
        <div className="card glass">
          <h3>✨ Features</h3>
          <ul>{projects.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='left'>
        <div className="card glass">
          <h3>🚀 Challenges</h3>
          <ul>{projects.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='right'>
        <div className="card glass">
          <h3>🛠 Tech Stack</h3>
          <div className="badges">
            {projects.techStack.map((tech, i) => <span key={i} className="badge">{tech}</span>)}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='left'>
        <div className="card glass">
          <h3>🕒 Timeline</h3>
          <p><strong>Role:</strong> {projects.role}</p>
          <p>{projects.timeline}</p>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='right'>
        <div className="card glass">
          <h3>🔮 Future Enhancement</h3>
          <ul>{projects.futureImprovements.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        </ScrollReveal>

      </div>

      <ScrollReveal direction='down'>
      <div className="folder-glass containers">
        <h3>📁 Folder Structure</h3>
        <pre className="code-block">
          <code>
            {projects.folderStructure.map((line, i) => (
              <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </code>
        </pre>
      </div>
      </ScrollReveal>

      <div className="back-link containers">
        <Link to="/">⬅ Back to Projects</Link>
      </div>
    </section>
  );
};

export default ProjectDetails;
