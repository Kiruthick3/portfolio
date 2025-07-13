import React from 'react'
import { projects } from '../data/constants';
import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from './ScrollReveal'
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const navigate = useNavigate();

    const ProjectDetails = (id) =>{
        navigate(`/Project/${id}`);
    }

  return (
    <>
        <section className="projects" id='projects'>
            <ScrollReveal direction='down'>
                <p>Portfolio.<span>push(this)</span></p>
            <h2 className="heading">Work I'<span>ve Done</span></h2>
            </ScrollReveal>
            <ScrollReveal direction='up'>
            <div className="projects-container">
                {projects.map((project)=>(
                    <div className="projects-box" key={project.id} >
                        <img src={`/assets/${project.image}`} alt="" />
                        <div className="projects-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <div onClick={() => ProjectDetails(project.id)} ><FiExternalLink /></div>
                        </div>  
                    </div>
                ))}
            </div>
            </ScrollReveal>
        </section>
    </>
  )
}

export default Projects