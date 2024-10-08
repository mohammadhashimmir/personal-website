import React from 'react'
import "../Styles/Footer.css"
import styles from "../Socials Modules/footer.module.css"
import Socials from './Socials';
import { useScrollContext } from '../Context/ScrollContext';

function Footer() {
    const { footerRef } = useScrollContext();
    return (
        <div className='footer-main' ref={footerRef}>
            <div className='footer-item'>
                <div className='contact-link-header'>Call</div>
                <div className="contact-link" onClick={() => window.location.href = 'tel:+91-9149474574'}>
                    +91-9149474574
                </div>
            </div>
            <div className='footer-item'>
                <div className='contact-link-header'>Write</div>
                <div className="contact-link" onClick={() => window.location.href = 'mailto:mohammadhashim619@gmail.com'}>
                    mohammdhashim619@gmail.com
                </div>
            </div>
            <div className='footer-item'>
                <div className='contact-link-header'>Connect</div>
                <Socials outerClass={styles.socialLinksFooter} innerClass={styles.socialLinkFooter} />
            </div>
            <div className='footer-item'>
                <div className='copyright'> &copy;2024 by Mohammad Hashim Mir
                </div>
            </div>
        </div>
    )
}

export default Footer