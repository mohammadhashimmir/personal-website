import React, {useState, useRef, useEffect} from "react";
import "../Components/Styles/Header.css";
import { Link } from "react-router-dom";

const Header=()=>{
  const [showSecondaryMenu, SetShowSecondaryMenu]=useState(false);

  const ref=useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {return;
      }
      SetShowSecondaryMenu(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  
    return(
  <div  ref={ref} > 
   
  <div  className="ui menu main">

  <Link to="/" className="item title">
  <h4 className="menuTitle"><i className="stop icon"></i> Mohammad Hashim</h4>
  <span className="menuSpan">&nbsp;&nbsp;/&nbsp;&nbsp;FRONT-END DEVELOPER</span> 
  </Link>
  <div className=" ui right menu m1">
  <Link to="/" className="item a2">
    Home
  </Link>
  <Link to="/projects" className="item a3">
    Projects
  </Link>
  <Link to="/about" className="item a4">
   About
  </Link>
  </div> 
  
  <div className="ui right menu m2" onClick={()=>{SetShowSecondaryMenu(!showSecondaryMenu)}}><i className="sidebar large icon hambrgr"></i>
  </div>
</div>

{ showSecondaryMenu ? 

<div className="ui vertical menu m3"> 
  <Link to="/" className="item"  onClick={()=>{SetShowSecondaryMenu(!showSecondaryMenu)}}>Home</Link>
  <Link to="/projects"  className="item"  onClick={()=>{SetShowSecondaryMenu(!showSecondaryMenu)}}>Projects</Link>
  <Link to="/about" className="item"  onClick={()=>{SetShowSecondaryMenu(!showSecondaryMenu)}}>About</Link>
</div>

:null
}
</div>
)
}

export default Header;