import React from 'react';
import Cards from './Cards';
import "../Styles/Projects.css";
import { useScrollContext } from '../Context/ScrollContext';
import taskkeepericon from "../SVG/taskkeeper.svg"
import taskkeeperDBicon from "../SVG/taskkeeperDB.svg"
import threeInOneSearch from "../SVG/3in1search.svg"
import CryptoIcon from "../SVG/crypto.svg"
import project from "../SVG/project.svg"
import todoReact from "../SVG/todolistReact.svg"
import todojs from "../SVG/todolistJS.svg"
import scorekeeperReact from "../SVG/scorekeeperReact.svg"
import scorekeeperJS from "../SVG/scorekeeperJS.svg"
import calculatorReact from "../SVG/calculatorReact.svg"
import calculatorJS from "../SVG/calculatorJS.svg"
import portfolioOld from "../SVG/portfolioOld.svg"

const list = [
  { name: "Advanced Task Keeper", icon: taskkeepericon, tech: "using React", link: "https://task-manager-hashim.netlify.app/", details: "Add, edit, delete, Mark Tasks." },
  { name: "Advanced Task Keeper with Database (Firestore)", icon: taskkeeperDBicon, tech: "using React", link: "https://task-manager-db-hashim.netlify.app/", details: "Add, edit, delete, Mark Tasks." },
  { name: "AI Hair Styling", icon: project, tech: "using JS, Python & Flask", link: "https://finalyear-frontend.netlify.app/", details: "A final year project (Without Python Code)." },
  { name: "3 in 1(Wiki, YT, Unsplash) Search", icon: threeInOneSearch, tech: "using React", link: "https://3in1-wiki-yt-unsplash-search.netlify.app/", details: "Search Wiki, YouTube and Unsplash in 1 single app." },
  { name: "Crypto Price Check", icon: CryptoIcon, tech: "using React", link: "https://crypto-check-app.netlify.app/", details: "Check latest Crypto Prices, Volume, Market Cap and much more." },
  { name: "Score Keeper", icon: scorekeeperReact, tech: "using React", link: "https://scorekeeper-with-react.netlify.app/", details: "Track Score of 2 Teams." },
  { name: "Score Keeper", icon: scorekeeperJS, tech: "using JS", link: "https://scorekeeper-wth-vjs.netlify.app/", details: "Track Score of 2 Teams." },
  { name: "To-Do List", icon: todojs, tech: "using JS", link: "https://todo-with-vjs.netlify.app/", details: "List to keep track of your Errands and other tasks." },
  { name: "To-Do List", icon: todoReact, tech: "using React", link: "https://todo-with-react-app.netlify.app/", details: "List to keep track of your Errands and other tasks." },
  { name: "Calculator", icon: calculatorReact, tech: "using React", link: "https://basic-calculator-with-react.netlify.app/", details: "Basic Calculator." },
  { name: "Calculator", icon: calculatorJS, tech: "using JS", link: "https://calculator-with-vjs.netlify.app/", details: "Basic Calculator from Scratch." },
  { name: "Portfolio Website(Old version)", icon: portfolioOld, tech: "using React", link: "https://hashimmirv1.netlify.app/", details: "Personal Portfolio Website" }
];

function Projects() {
  const { projectRef } = useScrollContext();
  return (
    <div className='project-section' ref={projectRef}>
      <div className='project-header'>
        <p>Showcase</p>
      </div>
      <div className='project-list'>
        {list.map((data, index) => (
          <Cards key={index} data={data} sty
          />
        ))}
      </div>

    </div>
  );
}

export default Projects;
