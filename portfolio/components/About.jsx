import React from 'react'
import ScrollReveal from './ScrollReveal'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    const explore = () =>{
       navigate('/About');
    }
  return (
    <>
        <section className="about" id='about'>
            <ScrollReveal direction='right'>
            <div className="about-img">
                <div className="img-box">
                    <img src="/assets/profile_pic.png" alt="" />
                </div>
                <div className="liquid-shape">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width="100%" >
                        <path  fill="none" strokeWidth="7px" stroke="#0ef" transform="translate(100 100)">
                        < animate attributeName = "d" 
                                dur="5000ms"
                                repeatCount="indefinite"
                                values="
                                M37.7,-43.1C48,-27.4,54.9,-13.7,52.1,-2.8C49.3,8.1,36.7,16.1,26.4,31.5C16.1,46.9,8.1,69.7,-7.6,77.3C-23.3,85,-46.6,77.4,-52.8,62C-59,46.6,-48.1,23.3,-48.1,0.1C-48,-23.2,-58.8,-46.4,-52.6,-62.1C-46.4,-77.8,-23.2,-86.1,-4.7,-81.4C13.7,-76.6,27.4,-58.9,37.7,-43.1Z;
                                "
                            />
                        </path>
                    </svg>
                </div>
                <div className="liquid-shape">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width="100%" >
                        <path  fill="none" strokeWidth="1px" stroke="#0ef" transform="translate(100 100)">
                        < animate attributeName = "d" 
                                dur="5000ms"
                                repeatCount="indefinite"
                                values="
                                M46.1,-54.5C50.9,-41.3,39.9,-20.6,34.5,-5.4C29.1,9.8,29.2,19.5,24.3,32C19.5,44.5,9.8,59.7,0.3,59.4C-9.1,59.1,-18.2,43.2,-31.3,30.7C-44.4,18.2,-61.4,9.1,-63,-1.6C-64.6,-12.3,-50.7,-24.6,-37.6,-37.8C-24.6,-51,-12.3,-65.1,4.2,-69.3C20.6,-73.5,41.3,-67.7,46.1,-54.5Z;
                                "
                            />
                        </path>
                    </svg>
                </div>
                 <div className="liquid-shape">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width="100%" >
                    <path  fill="#12f7ff" transform="translate(100 100)">
                       < animate attributeName = "d" 
                            dur="5000ms"
                            repeatCount="indefinite"
                            values="
                            M37.7,-43.1C48,-27.4,54.9,-13.7,52.1,-2.8C49.3,8.1,36.7,16.1,26.4,31.5C16.1,46.9,8.1,69.7,-7.6,77.3C-23.3,85,-46.6,77.4,-52.8,62C-59,46.6,-48.1,23.3,-48.1,0.1C-48,-23.2,-58.8,-46.4,-52.6,-62.1C-46.4,-77.8,-23.2,-86.1,-4.7,-81.4C13.7,-76.6,27.4,-58.9,37.7,-43.1Z;

                    
                            "
                        />
                    </path>
                </svg>
            </div>
            </div>
            </ScrollReveal>
             
            <div className="about-content">
                <ScrollReveal direction='down'>
                <h2 className="heading">  &lt;About<span>Me /&gt;</span></h2>
                <h3>Frontend Developer!</h3>
                </ScrollReveal>
                <ScrollReveal direction='left'>
                <p>  I didn’t always know I’d be a developer — I just knew I loved building things. From tinkering with visuals in a browser to diving deep into backend logic, I found a space where creativity meets logic. Now, I spend my days designing thoughtful interfaces, writing clean, reusable code, and turning wild ideas into working products — one commit at a time.</p>
                <p>Curious to know more? Let’s dive deeper.</p>
                <div className="btn" onClick={explore}>Let's Explore &#10148;</div></ScrollReveal>
            </div>
            
        </section>
    </>
  )
}

export default About