import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <ul className="footer-ul">
                <li className="footer-li"> 
                    <a className="footer-a" href={'https://github.com/samSterns'} target="_blank">
                    <FaGithub alt="click here to Visit my git hub" size={36}/> 
                    GitHub </a>
                </li>
                <li className="footer-li"> 
                    <a className="footer-a" href={'https://www.linkedin.com/in/samsterns/'}>
                    <FaLinkedin alt="click here to Visit my Linked In" size={36}/>
                    LinkedIn </a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer;