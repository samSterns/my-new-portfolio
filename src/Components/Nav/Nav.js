import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href={'https://github.com/samSterns'} target="_blank">
                    <FaGithub alt="click here to Visit my git hub" size={36}/> 
                    GitHub </a>
                </li>
                <li>
                    <a href={'https://www.linkedin.com/in/samsterns/'}>
                    <FaLinkedin alt="click here to Visit my Linked In" size={36}/>
                    LinkedIn </a>
                </li>
            </ul>
        </nav>

    )
}

export default Nav;