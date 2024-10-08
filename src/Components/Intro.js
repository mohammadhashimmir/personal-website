import React from 'react'
import "../Styles/Main.css"
import Socials from './Socials'
import styles from "../Socials Modules/main.module.css"
import pic from "../pic.jpg"
import "../Styles/Intro.css"
import { useScrollContext } from '../Context/ScrollContext'

function Intro() {
  const { homeRef } = useScrollContext();

  return (
    <div className='intro-div' ref={homeRef}>
      <div className='main-content-wrapper'>
        <div className='content-left'>
          <div className='image-wrapper'><img src={pic} alt="dp" /></div>
          <div className='main-title' style={{ textAlign: "center" }}> <p className="first">Mohammad</p>
            <p className="second">Hashim</p>
            <p>━━━━</p>
            <p className="third">FRONT-END DEVELOPER</p></div>
          <div className='social-links-mini'>
            <Socials outerClass={styles.socialLinksMain} innerClass={styles.socialLinkMain} />
          </div>
        </div>
        <div className='content-right'>
          <div className='top-title'><p>Hello,</p><p>Here is who i am & what i do</p></div>
          <div className='mid-description'><p>I'm A Front-end Web Developer. Designing and developing responsive user interface with ability to work with or without team. Creating clean, testable, maintainable and functional code is the highest priority.</p></div>
          <div className='bottom-skills'><p>HTML5 | CSS3 | ES6 | JavaScript | ReactJS | Redux</p></div>
        </div>
      </div>
    </div>
  )
}

export default Intro;