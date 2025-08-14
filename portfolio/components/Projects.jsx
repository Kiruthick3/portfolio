import React, {useState, useEffect} from 'react'
import API from "../api/api";
// import { projects } from '../data/constants';
import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from '../components/ScrollReveal'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const ProjectDetails = (id) =>{
        navigate(`/Project/${id}`);
    }

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await API.get("/projects");
                setProjects(data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);


    if (loading) return <p>Loading projects...</p>;

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
                    <div className="projects-box" key={project._id} >
                        {project.image?.url ? (
                            <img src={project.image.url} alt={project.title} />
                        ) : (
                            <div>No image</div>
                        )}
                        <div className="projects-layer">
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            {/* <Link to={`/project/${project._id}`}><FiExternalLink /></Link> */}
                            <div onClick={() => ProjectDetails(project._id)} ><FiExternalLink /></div>
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