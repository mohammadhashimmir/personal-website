import React from "react";
import Footer from "./Footer";
import "../Components/Styles/Main.css";
import {BsTwitter,BsInstagram,BsFacebook,BsLinkedin,BsGithub} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import dp from "../Components/Images/dp.png";


const Main=()=>{
    const navigate=useNavigate();
    return (
        <div className="top">
            <div className="leftBox"></div> 
            <div className="ui container centerBox">
            <div className="CenterBoxLeftCard">
            <div className="ui container leftboxContent">
            <img className="ui centered medium circular image" src={dp} alt="dp"/></div>
            <h3 className="firstHeader">Mohammad</h3>
            <h3 className="secondHeader">Hashim</h3>
            <span>━━━━</span>
            <p className="para1">FRONT-END DEVELOPER</p>
<div className="ui segment topSocial">
    <div> 
    <a href="https://twitter.com/mmdhashim?t=DxHgFpN6ndBDlL6FPLVD3Q&s=09"><span className="s2"> <BsTwitter/></span></a>
    <a href="https://instagram.com/hashem_meer?igshid=YmMyMTA2M2Y="><span className="s3"> <BsInstagram/></span></a>
    <a href="https://www.facebook.com/Iamhashm"><span className="s4"> <BsFacebook/></span></a> 
    <a href="https://www.linkedin.com/in/mohammad-hashim-mir-8a8a71206/"><span className="s5"> <BsLinkedin/></span></a> 
    <a href="https://github.com/mohammadhashimmir"><span className="s6"> <BsGithub/></span></a>
    </div>
    </div>  
    </div>
<div className="ui card contentBox">
        <div className="content ct">
        <h1 className="cardHeading">Hello,</h1>
        <h5 className="cardSubHeading">Here is who i am & what i do</h5>
        <div className="ui container buttonSection">
        <button className="ui button mainPageB1" onClick={()=>{window.open("https://hashimresume.netlify.app/")}}>Resume</button>
        <button className="ui button mainPageB2"  onClick={()=>{navigate("/about")}}>About Me</button>
        </div>
        
        <p className="para2">
            I'm A Front-end Web Developer.
            Designing and developing responsive user interface with ability to work with or without team. 
            Creating clean, testable, maintainable and functional code is the highest priority.</p>
           <p className="skills">HTML | CSS | Bootstrap | Semantic-UI | JavaScript | React.js | Redux & Material-UI</p>
       
      
    </div>
    </div> 
    </div>
 
    <Footer/> 
        </div>
    )
};
export default Main;