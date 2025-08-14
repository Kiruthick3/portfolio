import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ScrollReveal from '../components/ScrollReveal'

const AboutDetails = () => {
    
    const AboutNavbar = () => {
        const [lightMode, setLightMode] = useState(false);
        const [isOpen, setIsOpen] = useState(false);
        const navigate = useNavigate();
        const home = () =>{
            navigate('/');
        }
        const phoneNo = import.meta.env.VITE_PHONE_NUMBER;
        const linkedIn = import.meta.env.VITE_LINKEDIN;
        const email = import.meta.env.VITE_EMAIL;
        const message = "Hi, I want to chat!";
        const subject = "Hello!";

        useEffect(() => {
        document.body.classList.toggle('light-mode', lightMode);
        }, [lightMode]);

        useEffect(() => {
            window.scrollTo(0,0);
        }, []);

        return (
            <>
                <header className="header">
                    <div className="container">
                        <a href="#" className="logo">Portfolio</a>
                        <div className="menu-icon"  onClick={() => setIsOpen(!isOpen)}>
                            {!isOpen?<LuMenu />:<IoClose />}
                        </div>
                    </div>

                    <div className='theme-toggle' onClick={() => setLightMode(prev => !prev)}>
                        {lightMode ? <MdDarkMode /> : <MdOutlineLightMode />}
                    </div>

                    <nav className={`navbar ${isOpen? 'open' : ''}`}>
                        <a href="#home" onClick={home}>Home</a>
                        <a href="#about" onClick={home}>About</a>
                        <a href="#skills" onClick={home}>Skills</a>
                        <a href="#projects" onClick={home}>Projects</a>
                        <a href="#contact" onClick={home}>Contact</a>
                    </nav>
                </header>
                <section className="about-section">
                    <ScrollReveal direction='down'>
                        <h1 className="about-title">My <span>Journey</span></h1>
                    </ScrollReveal>

                    <ScrollReveal direction='right'>
                    <div className="about-block">
                        <h2 className="about-heading">👋 Overview</h2>
                        <p>
                            I’m a passionate and self-motivated web developer with a deep interest in technology and creating things from scratch.
                            My curiosity for tech began back in school when I watched movies about hacking and cybersecurity — it sparked a dream
                            to one day work in that world. That initial fascination grew into a desire to build and explore, especially in game
                            development, which pushed me deeper into the tech world during college.
                        </p>
                    </div>
                    </ScrollReveal>
                    
                    <ScrollReveal direction='left'>
                    <div className="about-block">
                        <h2 className="about-heading">📚 My Learning Journey</h2>
                        <p>
                            I started my coding journey by learning HTML and CSS on my own, creating simple layouts in the early stages.
                            This was followed by learning programming languages like C++ and Python to strengthen my fundamentals.
                            Later, I transitioned into web development by mastering JavaScript and its popular frameworks — React for frontend,
                            Node.js and Express for backend, and MongoDB for databases — shaping me into a full-stack web developer.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction='right'>
                    <div className="about-block">
                        <h2 className="about-heading">🛠 Projects & Practice</h2>
                        <p>
                            During my learning, I developed mini projects such as a weather app, a todo list application, and my personal portfolio website.
                            These projects not only improved my technical knowledge but also strengthened my problem-solving abilities, team workflow understanding,
                            and application structure.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction='left'>
                    <div className="about-block">
                        <h2 className="about-heading">🧠 Problem-Solving & Math</h2>
                        <p>
                            Mathematics has always been my favorite subject. It gives me satisfaction when I solve problems and reach accurate solutions —
                            a mindset that deeply helps in programming and debugging. This logical thinking greatly benefits my ability to solve coding challenges
                            and build clean, efficient solutions.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction='right'>
                    <div className="about-block">
                        <h2 className="about-heading">🎮 Development Philosophy</h2>
                        <p>
                            I love building things from scratch, similar to how I enjoy planning strategies in my favorite game, Clash of Clans.
                            It helps me develop soft skills like time management, resource planning, and patience — all of which I carry into my coding approach.
                        </p>
                        <p>
                            I believe in writing code that is not just functional, but also clean, scalable, and easy to maintain.
                            My focus is always on performance, accessibility, and user experience.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction='left'>
                    <div className="about-block">
                        <h2 className="about-heading">🎨 Beyond the Code</h2>
                        <p>
                        Outside of development, I enjoy drawing to relax, watching movies (especially from the Marvel Cinematic Universe),
                        and cooking — a hobby that brings me joy and creativity. I’ve even worked part-time in restaurants, which helped me
                        develop real-world communication and teamwork skills.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction='right'>
                    <div className="about-block">
                        <h2 className="about-heading">🚀 My Goal</h2>
                        <p>
                            My ultimate goal is to join a product-based company as a full-stack developer.
                            I aim to build impactful, user-centered applications and contribute meaningfully to teams and tech communities while continuing to grow as a developer.
                        </p>
                    </div>
                    </ScrollReveal>

                    <ScrollReveal direction='left'>
                    <div className="about-block">
                        <h2 className="about-heading">🤝 Let’s Connect</h2>
                        <p>
                            I’m always excited to collaborate on interesting projects, learn from others, and grow as a developer.
                        </p>
                        <p>
                            If you’re looking for someone who’s dedicated, eager to learn, and serious about building great software — I’d love to connect!
                        </p>
                        <div className="scoial-media">
                            <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
                            <a href = {`https://wa.me/${phoneNo}?text=${encodeURIComponent(message)}`} target='_blank' rel="noopener noreferrer"><FaWhatsapp /></a>
                            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"><SiGmail /></a>
                        </div>
                    </div>
                    </ScrollReveal>   
                </section>
            </>
            
        );
    }
  return (
    <div>
       <AboutNavbar/>
    </div>
  )
}

export default AboutDetails