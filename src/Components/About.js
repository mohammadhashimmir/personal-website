import React from "react";
import Footer from "./Footer";
import "../Components/Styles/About.css";
import dp from "../Components/Images/dp.png";
import { useNavigate } from "react-router-dom";

const About=()=>{
    const navigate=useNavigate();
    return (

   <div>
        <div className="lb"></div>   
        <div className="ui main text container">    
<div className="ui container headContent" >
<h4 className="ui horizontal divider header"> About Me</h4>
</div>
<br/>
<img alt="dp" className="ui small left floated circular image img1" src={dp}/> 
        <p>My name is Mohammad Hashim Mir. I am A Computer Science Engineer Graduate and I'm into Front-end Web Development. Designing and developing responsive user interface with ability to work with or without team.Creating clean, testable, maintainable and functional code is the highest priority.</p>
       <br/> <p>I Aspire to explore into challenging position with an organization that offers growth and development based on dedication and proven ability. I want to serve an organization that trains, educates and inculate professional disciplines and standards within me.</p>
       <p> <i className="play icon"></i> Some of my technical skills are HTML, CSS, JavaScript, Bootstrap, ReactJS, Redux, Semantic UI, Material UI and Python</p>
        <p/><i className="play  icon"></i> My Strength is Coding, Team-Work, writing & communication skills & giving new designs and ideas.<p/>
        <p><i className="play icon"></i> I like Coding, gaming, travel & sports </p>
        <div  className="ui container buttonBox">
    <button className="ui button aboutPageb1"  onClick={()=>{navigate("/projects")}}>Projects</button>
    <button className="ui button aboutPageb2" onClick={()=>{window.open("https://hashimresume.netlify.app/")}}>Resume</button></div> 
 </div>
        
 <Footer/>
 </div>
 )
};
export default About;