import React from 'react';
import linkedin from './images/linkedin.svg';
import github from './images/github-sign.svg';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer">
            {/* Github and Linkedin Page Icons */}
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/suryatejatammana/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin-logo" />
                </a>
                <a href="https://github.com/imSurya-dev" target="_blank" rel="noreferrer" >
                    <img src={github} alt="github-logo" />
                </a>

            </div>
            {/* Portfolio Page */}
            <div className="footer__portfolio">
                <a href="http://surya-teja.surge.sh" target="_blank" rel="noreferrer" >Checkout My Portfolio</a>
            </div>
            <div>
                Developed by Surya Teja Tammana
            </div>
        </div>
    )
}

export default Footer
