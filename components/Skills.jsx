
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ProgressBar from '@ramonak/react-progress-bar';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '/components/ScrollReveal';

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,   
        threshold: 0.1       
    });
    
    const technicalSkills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'Python', level: 65 },
        { name: 'JavaScript', level: 65 },
        { name: 'React.js', level: 75 },
        { name: 'Node.js', level: 65 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'Mongoose', level: 70 },
    ];

    const ProfessionalSkills = [
        { name: 'Teamwork', level: 90 },
        { name: 'Time Management', level: 75 },
        { name: 'Critical Thinking', level: 70 },
        { name: 'Problem-Solving', level: 65 },
        { name: 'Communication', level: 75 },
        { name: 'Attention to Detail', level: 90 },
    ];

    const skillsData = {
        technical: technicalSkills,
        professional: ProfessionalSkills
    };


    const iconList = [
        "html.svg", "css.svg", "javascript.svg", "python.svg", "react.svg",
        "nodejs.svg", "express js.svg", "mongodb.svg", "mongoose.png",
        "git-hub.svg", "git.svg", "npm.svg"
    ];
    

  return (
    <>
        <section className="skills" id='skills' ref={ref}>
            <div className="main-text">
                <ScrollReveal direction = "down">
                <p>Code &gt; <span>Talk</span></p>
                <h2 className="heading">My <span>Skillset </span> </h2>
                </ScrollReveal>
            </div>
            <div className="skill-container">
                <ScrollReveal direction = "right">
                <div className="skill-left">
                    <h3>Technical <span>Skills</span></h3>
                    {skillsData.technical.map((skill, index) => (
                        <div className="skill-bar" key={index}>
                            <div className="skill-name">{skill.name}</div>
                            <div>
                                <ProgressBar completed={inView?skill.level : 0} bgColor='#0ef' baseBgColor='#fff' height='1.3rem' labelColor='#02071f' labelSize='1.2rem' animateOnRender initCompletedOnAnimation={0} />   
                            </div>
                        </div>
                    ))}
                </div>
                </ScrollReveal>

                <ScrollReveal direction = "left">
                <div className="skill-right">
                    <h3>Professional <span>Skills</span></h3>
                    <div className="circular-grid">
                    {skillsData.professional.map((skill, index) => (
                        <div key={index} className='circular-bar' >
                            <div className="box">
                                <CircularProgressbarWithChildren
                                    value={inView ? skill.level : 0}
                                    styles={buildStyles({
                                    pathColor: '#0ef',
                                    trailColor: '#fff',
                                    strokeLinecap: 'butt',
                                    rotation: 0,
                                    pathTransitionDuration: 3,
                                    trailWidth: 4,
                                    pathWidth: 10
                                    })}
                                    strokeWidth={6}
                                >
                                    <div style={{ fontSize: 16, marginTop: -5 }}>
                                       {inView ? `${skill.level}%` : 0}
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div> 
                            <div className="skill-name">{skill.name}</div>
                            
                        </div>
                    ))}
                    </div>
                </div>
                </ScrollReveal>
            </div>
            <div className="skill-icon-container">
                <ScrollReveal direction = "down">
                    <p>console.log<span>("Tech I Love")</span></p>
                <h2>Stack I <span>Code With</span></h2>
                </ScrollReveal>
                <ScrollReveal direction = "up">
                <div className="scroll-wrapper">
                <div className="scroll-track">
                   {iconList.concat(iconList).map((icon, index) => (
                    <div key={index} className="scroll-icon">
                        <img src={`/assets/${icon}`} alt={icon} />
                    </div>
                    ))}
                </div>
                </div>
                </ScrollReveal>
            </div>  
        </section>
    </>
  )
}

export default Skills