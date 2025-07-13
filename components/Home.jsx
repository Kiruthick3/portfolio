import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import ScrollReveal from '/components/ScrollReveal';

const Home = () => {
    const phoneNo = import.meta.env.VITE_PHONE_NUMBER;
    const linkedIn = import.meta.env.VITE_LINKEDIN;
    const email = import.meta.env.VITE_EMAIL;
    const message = "Hi, I want to chat!";
    const subject = "Hello!";
    const resume = '/assets/resume.pdf';

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'My_Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <>
        <section className="home" id="home">
            <div className="home-content">
                <ScrollReveal direction = "down">
                <h3>"Hello World!"</h3>
                <h1>ReadMe: <span>Kiruthick</span>.md</h1>
                <h3>
                    I'm a 
                    <span className="msg"> 
                        <Typewriter 
                        words={['Full Stack Developer', 'React Enthusiast','Web Developer', 'MERN Stack Developer', 'Python Enthusiast']} 
                        loop={0} 
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500} />
                    </span>
                </h3>
                </ScrollReveal>
                <ScrollReveal direction ="right">
                <p>
                    I'm a full-stack developer who enjoys solving bugs almost as much as introducing them (kidding… mostly). I’m all about clean code, intuitive design, and the occasional late-night “why isn’t this working” moment
                </p>
                <div className="scoial-media">
                    <a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' rel="noopener noreferrer"><FaLinkedinIn /></a>
                    <a href = {`https://wa.me/${phoneNo}?text=${encodeURIComponent(message)}`} target='_blank' rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer"><SiGmail /></a>
                </div>
                <div className="btn" onClick={handleDownload}>Download Resume</div>
                <p className='quotes'>"Built with bugs, fixed with passion." <span>~ &lt;kiru/&gt;</span></p>
                </ScrollReveal>
                
            </div>
            <ScrollReveal direction="left">
            <div className="home-img">
                <div className='img-box'>
                    <img src="/assets/profile_pic.png" alt="" />
                </div>
                 <div className="liquid-shape">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width="100%" >
                    <path  fill="#12f7ff" transform="translate(100 100)">
                       < animate attributeName = "d" 
                            dur="7000ms"
                            repeatCount="indefinite"
                            values="
                            
                             M37.7,-43.1C48,-27.4,54.9,-13.7,52.1,-2.8C49.3,8.1,36.7,16.1,26.4,31.5C16.1,46.9,8.1,69.7,-7.6,77.3C-23.3,85,-46.6,77.4,-52.8,62C-59,46.6,-48.1,23.3,-48.1,0.1C-48,-23.2,-58.8,-46.4,-52.6,-62.1C-46.4,-77.8,-23.2,-86.1,-4.7,-81.4C13.7,-76.6,27.4,-58.9,37.7,-43.1Z;

                            M26.8,-32.7C33.8,-19.8,37.9,-9.9,40.8,2.8C43.6,15.6,45.2,31.2,38.2,40.5C31.2,49.8,15.6,52.9,-1.3,54.1C-18.1,55.4,-36.3,54.9,-48,45.6C-59.8,36.3,-65.3,18.1,-64,1.3C-62.8,-15.6,-54.8,-31.2,-43,-44.1C-31.2,-57,-15.6,-67.1,-2.9,-64.2C9.9,-61.4,19.8,-45.5,26.8,-32.7Z;

                            M20.4,-24.3C25.7,-15.1,28.7,-7.6,28.9,0.2C29.1,8,26.6,16,21.3,30.4C16,44.9,8,65.7,-7.2,72.9C-22.4,80.1,-44.9,73.7,-49.7,59.3C-54.5,44.9,-41.8,22.4,-41.2,0.6C-40.6,-21.3,-52.2,-42.5,-47.3,-51.7C-42.5,-60.9,-21.3,-58,-6.8,-51.2C7.6,-44.3,15.1,-33.5,20.4,-24.3Z;
                           
                            M46.1,-54.5C50.9,-41.3,39.9,-20.6,34.5,-5.4C29.1,9.8,29.2,19.5,24.3,32C19.5,44.5,9.8,59.7,0.3,59.4C-9.1,59.1,-18.2,43.2,-31.3,30.7C-44.4,18.2,-61.4,9.1,-63,-1.6C-64.6,-12.3,-50.7,-24.6,-37.6,-37.8C-24.6,-51,-12.3,-65.1,4.2,-69.3C20.6,-73.5,41.3,-67.7,46.1,-54.5Z;

                            M37.7,-43.1C48,-27.4,54.9,-13.7,52.1,-2.8C49.3,8.1,36.7,16.1,26.4,31.5C16.1,46.9,8.1,69.7,-7.6,77.3C-23.3,85,-46.6,77.4,-52.8,62C-59,46.6,-48.1,23.3,-48.1,0.1C-48,-23.2,-58.8,-46.4,-52.6,-62.1C-46.4,-77.8,-23.2,-86.1,-4.7,-81.4C13.7,-76.6,27.4,-58.9,37.7,-43.1Z;
                            
                            "
                        />
                    </path>
                </svg>
            </div>
             <div className="liquid-shape">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width="100%" >
                    <path  fill="#12f7ff" transform="translate(100 100)">
                       < animate attributeName = "d" 
                            dur="7000ms"
                            repeatCount="indefinite"
                            values="
                            
                            

                            M37.7,-43.1C48,-27.4,54.9,-13.7,52.1,-2.8C49.3,8.1,36.7,16.1,26.4,31.5C16.1,46.9,8.1,69.7,-7.6,77.3C-23.3,85,-46.6,77.4,-52.8,62C-59,46.6,-48.1,23.3,-48.1,0.1C-48,-23.2,-58.8,-46.4,-52.6,-62.1C-46.4,-77.8,-23.2,-86.1,-4.7,-81.4C13.7,-76.6,27.4,-58.9,37.7,-43.1Z;

                            M26.8,-32.7C33.8,-19.8,37.9,-9.9,40.8,2.8C43.6,15.6,45.2,31.2,38.2,40.5C31.2,49.8,15.6,52.9,-1.3,54.1C-18.1,55.4,-36.3,54.9,-48,45.6C-59.8,36.3,-65.3,18.1,-64,1.3C-62.8,-15.6,-54.8,-31.2,-43,-44.1C-31.2,-57,-15.6,-67.1,-2.9,-64.2C9.9,-61.4,19.8,-45.5,26.8,-32.7Z;

                           M20.4,-24.3C25.7,-15.1,28.7,-7.6,28.9,0.2C29.1,8,26.6,16,21.3,30.4C16,44.9,8,65.7,-7.2,72.9C-22.4,80.1,-44.9,73.7,-49.7,59.3C-54.5,44.9,-41.8,22.4,-41.2,0.6C-40.6,-21.3,-52.2,-42.5,-47.3,-51.7C-42.5,-60.9,-21.3,-58,-6.8,-51.2C7.6,-44.3,15.1,-33.5,20.4,-24.3Z;

                            M46.1,-54.5C50.9,-41.3,39.9,-20.6,34.5,-5.4C29.1,9.8,29.2,19.5,24.3,32C19.5,44.5,9.8,59.7,0.3,59.4C-9.1,59.1,-18.2,43.2,-31.3,30.7C-44.4,18.2,-61.4,9.1,-63,-1.6C-64.6,-12.3,-50.7,-24.6,-37.6,-37.8C-24.6,-51,-12.3,-65.1,4.2,-69.3C20.6,-73.5,41.3,-67.7,46.1,-54.5Z;

                            M37.7,-43.1C48,-27.4,54.9,-13.7,52.1,-2.8C49.3,8.1,36.7,16.1,26.4,31.5C16.1,46.9,8.1,69.7,-7.6,77.3C-23.3,85,-46.6,77.4,-52.8,62C-59,46.6,-48.1,23.3,-48.1,0.1C-48,-23.2,-58.8,-46.4,-52.6,-62.1C-46.4,-77.8,-23.2,-86.1,-4.7,-81.4C13.7,-76.6,27.4,-58.9,37.7,-43.1Z;
                            "
                        />
                    </path>
                </svg>
            </div>
            </div>
            </ScrollReveal>
        </section>
    </>
  )
}

export default Home