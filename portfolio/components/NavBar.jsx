import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [lightMode, setLightMode] = useState(false);
  const [isActive, setIsActive] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  
  const toggleMenu = () =>{
    setIsOpen(false);
  }

  const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setIsActive(`#${id}`);
          }
        }
      });
    };
  
    useEffect(() => {
      document.body.classList.toggle('light-mode', lightMode);
    }, [lightMode]);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div>
        <header className="header">

          <div className="container">
            <a href="#" className="logo" 
            onClick={toggleMenu} 
            onDoubleClick={() => navigate("/admin/login")}>
              Portfolio
            </a>
            <div className="menu-icon"  onClick={() => setIsOpen(!isOpen)}>{!isOpen?<LuMenu />:<IoClose />}</div>
          </div>

          <div className='theme-toggle' onClick={() => setLightMode(prev => !prev)}>
            {lightMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </div>

          <nav className={`navbar ${isOpen? 'open' : ''}`} >
              <a href="#home" 
              className={isActive === '#home' ? 'active' : ''} 
              onClick={toggleMenu}>
                Home
              </a>
              <a href="#about" className={isActive === '#about' ? 'active' : ''}onClick={toggleMenu}>About</a>
              <a href="#skills" className={isActive === '#skills' ? 'active' : ''} onClick={toggleMenu}>Skills</a>
              <a href="#projects" className={isActive === '#projects' ? 'active' : ''} onClick={toggleMenu}>Projects</a>
              <a href="#contact" className={isActive === '#contact' ? 'active' : ''} onClick={toggleMenu}>Contact</a>
          </nav>


        </header>
    </div>
  )
}

export default NavBar