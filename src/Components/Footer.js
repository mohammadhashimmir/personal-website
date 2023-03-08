import React from "react";
import "../Components/Styles/Footer.css";
import {BsTwitter,BsInstagram,BsFacebook,BsLinkedin,BsGithub} from "react-icons/bs";

const Footer=()=>{
    return (
      
      <div>
  <div className="ui bottom fixed stackable menu m1">

  <div className="left menu">
  <p className="pCredit">Inspired By <a className="wix" href="https://www.wix.com/">WIX.com</a></p>
  </div>
  
  <div className="right menu m1">

    <div className="section1">
    <p className="pCall">Call</p>
    <div>
    <p className="pNumber">+91-9149474574</p>
    </div>
    </div>

    <div  className="section2">
    <p className="pWrite">Write</p>
    <div>
    <p className="pMail">mohammadhashim619@gmail.com</p>
    </div>
    </div>

    <div className="section3">
    <p className="pFollow">Follow</p>
    <div className="pSocial">
    <a href="https://twitter.com/mmdhashim?t=DxHgFpN6ndBDlL6FPLVD3Q&s=09"><span className="s2"> <BsTwitter/></span></a>
    <a href="https://instagram.com/hashem_meer?igshid=YmMyMTA2M2Y="><span className="s3"> <BsInstagram/></span></a>
    <a href="https://www.facebook.com/Iamhashm"><span className="s4"> <BsFacebook/></span></a> 
    <a href="https://www.linkedin.com/in/mohammad-hashim-mir-8a8a71206/"><span className="s5"> <BsLinkedin/></span></a> 
    <a href="https://github.com/mohammadhashimmir"><span className="s6"> <BsGithub/></span></a>
    </div>
    </div>

    </div>
    </div>

    </div>
  
    )
    
};

export default Footer;