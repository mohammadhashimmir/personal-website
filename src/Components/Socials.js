import React from 'react'
import { BsTwitterX, BsInstagram, BsFacebook, BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

function Socials({ outerClass, innerClass }) {
    return (
        <div className={outerClass}>
            <div className={innerClass} onClick={() => window.open('https://github.com/mohammadhashimmir', '_blank')}>
                <BsGithub />
            </div>
            <div className={innerClass} onClick={() => window.open('https://www.linkedin.com/in/mohammad-hashim-mir-8a8a71206/', '_blank')}>
                <BsLinkedin />
            </div>
            <div className={innerClass} onClick={() => window.open('https://wa.me/9858812818', '_blank')}>
                <BsWhatsapp />
            </div>
            <div className={innerClass} onClick={() => window.open('https://twitter.com/mmdhashim?t=DxHgFpN6ndBDlL6FPLVD3Q&s=09', '_blank')}>
                <BsTwitterX />
            </div>
            <div className={innerClass} onClick={() => window.open('https://instagram.com/hashem_meer?igshid=YmMyMTA2M2Y=', '_blank')}>
                <BsInstagram />
            </div>
            <div className={innerClass} onClick={() => window.open('https://www.facebook.com/Iamhashm', '_blank')}>
                <BsFacebook />
            </div>

        </div>
    )
}
export default Socials