import React, { useEffect, useState } from 'react'
import "../Styles/Header.css"
import { FiMenu } from "react-icons/fi";
import { useScrollContext } from '../Context/ScrollContext';
import DarkModeSwitch from './DarkModeSwitch';
function Header({ toggleSecondaryMenu, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { homeRef, projectRef, resumeRef, footerRef } = useScrollContext();

  // smooth Scroll 
  const scrollToComponent = (componentRef) => {
    componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // toggle Side Menu 
  function onMenuIconClick() {
    toggleSecondaryMenu(true)
  }

  return (
    <div className="navbar-wrapper">
      <div className={!isScrolled ? 'navbar' : 'navbar-scrolled'}>

        <div className="ham-icon"><FiMenu onClick={onMenuIconClick} />
        </div>
        <div className="my-name" onClick={() => scrollToComponent(homeRef)}>Mohammad Hashim Mir</div>
        <div className="nav-links">
          <div className="nav-link" onClick={() => scrollToComponent(projectRef)}>Projects</div>
          <div className="nav-link" onClick={() => scrollToComponent(resumeRef)}>Resume</div>
          <div className="nav-link" onClick={() => scrollToComponent(footerRef)}>Connect</div>
          <div className='nav-link-darkmode'>
            <span>Dark Mode</span>
            <DarkModeSwitch toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </div>


  )
}

export default Header