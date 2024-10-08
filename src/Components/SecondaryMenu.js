import React from 'react'
import Socials from "../Components/Socials"
import "../Styles/SecondaryMenu.css"
import { RiCloseLargeLine } from "react-icons/ri";
import DarkModeSwitch from './DarkModeSwitch';
import styles from "../Socials Modules/menu.module.css"
import { useScrollContext } from '../Context/ScrollContext';

function SecondaryMenu({ isOpen, toggleSecondaryMenu, toggleTheme }) {
    const { projectRef, resumeRef, footerRef } = useScrollContext();

    //  smooth scroll in side menu
    const scrollToComponent = (componentRef) => {
        componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className={`secondary-menu ${isOpen ? 'open' : ''}`}>
            <div className='secondary-menu-header'>
                <div className='secondary-menu-cross'><RiCloseLargeLine onClick={() => toggleSecondaryMenu(false)} /></div>
            </div>
            <div className='secondary-menu-body'>
                <div className='secondary-menu-item' onClick={() => { scrollToComponent(projectRef); toggleSecondaryMenu(false) }}>Projects</div>
                <div className='secondary-menu-item' onClick={() => { scrollToComponent(resumeRef); toggleSecondaryMenu(false) }}>Resume</div>
                <div className='secondary-menu-item' onClick={() => { scrollToComponent(footerRef); toggleSecondaryMenu(false) }}>Connect</div>
                <div className='secondary-menu-item-dark'><span>Dark Mode</span><DarkModeSwitch toggleTheme={toggleTheme} /></div>
            </div>
            <div className='secondary-menu-footer'>
                <Socials outerClass={styles.socialLinksMenu} innerClass={styles.socialLinkMenu} />
            </div>
        </div>
    )
}

export default SecondaryMenu;