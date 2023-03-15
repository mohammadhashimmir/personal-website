import React from "react";
import wiki from "../Components/Images/wiki.jpg";
import Crypto from "../Components/Images/crypto.jpg";
import todovjs from "../Components/Images/todovjs.jpg";
import todoreact from "../Components/Images/todoreact.jpg";
import skvjs from "../Components/Images/skvjs.jpg";
import skreact from "../Components/Images/skreact.jpg";
import calcreact from "../Components/Images/calcreact.jpg";
import calcvjs from "../Components/Images/calcvjs.jpg";
import finalyear from "../Components/Images/finalyear.jpg";
import "../Components/Styles/Project.css";
const list=[

  {name:"3 in 1(Wiki, YT, Unsplash) Search",
  tech:"using React",
  image:wiki,
  alt:"Photo by Maxim Ilyahov on Unsplash",
  link:"https://3in1-wiki-yt-unsplash-search.netlify.app/",
  details:"Search Wiki, YouTube and Unsplash in 1 single app."},

  {name:"Crypto Price Check",
  tech:"using React",
  image:Crypto,
  alt:"Photo by Pierre Borthiry - Peiobty on Unsplash",
  link:"https://crypto-check-app.netlify.app/",
  details:"Check latest Crpto Prices,Volume, Market Cap and much more."},

  {name:"Final Year Project (Without Python Code)",
  tech:"using HTML, CSS, JS, Python & Flask ",
  image:finalyear,
  alt:"Photo by charlesdeluvio on Unsplash",
  link:"https://finalyear-frontend.netlify.app/",
  details:"Front End of Final Year Project(Without Python code and Trainer)."},

  {name:"To-Do List",
  tech:"using VJS",
  image:todovjs,
  alt:"",
  link:"https://todo-with-vjs.netlify.app/",
  details:"List to keep track of your Errands and other tasks."},

  {name:"To-Do List",
  tech:"using React",
  image:todoreact,
  alt:"Photo by Andrew Neel on Unsplash",
  link:"https://todo-with-react-app.netlify.app/",
  details:"List to keep track of your Errands and other tasks."},
  
  {name:"Score Keeper",
  tech:"using React",
  image:skreact,
  alt:"Photo by Ray Shrewsberry on Unsplash",
  link:"https://scorekeeper-with-react.netlify.app/",
  details:"Track Score of 2 Teams."},
  
  {name:"Score Keeper",
  tech:"using VJS",
  image:skvjs,
  alt:"Photo by Nick Fewings on Unsplash",
  link:"https://scorekeeper-wth-vjs.netlify.app/",
  details:"Track Score of 2 Teams."},
  
  {name:"Calculator",
  tech:"using React",
  image:calcreact,
  alt:"Photo by Dan Meyers on Unsplash",
  link:"https://basic-calculator-with-react.netlify.app/",
  details:"Basic Calculator."},
  
  {name:"Calculator",
  tech:"using VJS",
  image:calcvjs,
  alt:"Photo by Iryna Tysiak on Unsplash",
  link:"https://calculator-with-vjs.netlify.app/",
  details:"Basic Calculator from Scratch."},
]

const renderedList=list.map((items)=>{
  return (
    
      <div className="ui raised card" onClick={()=>{window.open(`${items.link}`, '_blank')}} key={items.image}>
      <div className="ui image">
    <img src={items.image} alt={items.alt} className="projectImg"/>
  </div>
  <div className="ui content">
    <h3 className="ui header name">{items.name}</h3>
    <div className="meta">
    <span className="date">{items.tech} 
     </span>
    </div>
    
  </div>
  <div className="extra content">
      <div className="description">
      <i className="info circle icon" style={{color:"#67605c"}}></i>
     {items.details}
    </div> 
  </div>
      </div>   
  )
 
})


const Projects=()=>{
    return (
      <div>
         <div className="background"></div>
    <div className="ui four centered stackable cards">   
{renderedList}
    </div>
    </div>
    )
}


export default Projects;