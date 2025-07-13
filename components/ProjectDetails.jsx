import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/constants';
import { IoClose } from "react-icons/io5";
import ScrollReveal from './ScrollReveal'

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  if (!project) {
    return <div className="not-found">⚠️ Project not found.</div>;
  }

  return (    
    <section className="project-glass">
      <ScrollReveal direction='right'>
      <div className="hero-slice">
        <div className="hero-content">
          <h1>{project.title}</h1>
          <p className="meta">{project.role} · {project.timeline}</p>
          <p className="sub">{project.description}</p>
          <div className="hero-buttons">
            <a href={project.liveLink} target="_blank" rel="noreferrer">🌐 Live</a>
            <a href={project.codeLink} target="_blank" rel="noreferrer">💻 Code</a>
          </div>
        </div>
      </div>
      </ScrollReveal>

      <ScrollReveal direction='up'>
      <div className="monitor-mockup-container">
        <div className="project-screen-crop">
          <img src={`/assets/${project.image}`} alt="Project Preview" className="project-screen-image"/>
        </div>
        <img src="/assets/monitor.png" alt="Monitor Frame" className="monitor-overlay" onClick={() => window.open(project.liveLink, "_blank")} />
      </div>
      </ScrollReveal>

      <ScrollReveal direction='right'>
      <div className="card glass">
        <h3>🛠 Project Description</h3>
        {project.fullDescription.map((desc, i) => <p key={i} className='project-des'>{desc}</p>)}
      </div>
      </ScrollReveal>

      <ScrollReveal direction='left'>
      <div className="screenshots containers">
        <h3>📸 Gallery</h3>
        <div className="scroll-gallery">
          {project.screenshots.map((img, i) => (
            <img key={i} src={`/assets/${img}`} alt="" onClick={() => setLightboxImage(`/assets/${img}`)} />
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
          <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='left'>
        <div className="card glass">
          <h3>🚀 Challenges</h3>
          <ul>{project.challenges.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='right'>
        <div className="card glass">
          <h3>🛠 Tech Stack</h3>
          <div className="badges">
            {project.techStack.map((tech, i) => <span key={i} className="badge">{tech}</span>)}
          </div>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='left'>
        <div className="card glass">
          <h3>🕒 Timeline</h3>
          <p><strong>Role:</strong> {project.role}</p>
          <p>{project.timeline}</p>
        </div>
        </ScrollReveal>

        <ScrollReveal direction='right'>
        <div className="card glass">
          <h3>🔮 Future Enhancement</h3>
          <ul>{project.futureImprovements.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        </ScrollReveal>

      </div>

      <ScrollReveal direction='down'>
      <div className="folder-glass containers">
        <h3>📁 Folder Structure</h3>
        <pre className="code-block">
          <code>
            {project.folderStructure.map((line, i) => (
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
