import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import './Project.scss';
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">Front End Project</h2>
                </div>
                <div className="back">
                    <h3>Pet Pals</h3>
                    <ul>
                        <li>React.js | Sass | NPM | AWS S3</li>
                        <li>Group Sprint at Alchemy Code Lab</li>
                        <li>Contributed to the information architecture and chat feature</li>
                    </ul>
                    <a href={'https://github.com/Pet-Project-Alchemy'}      target="_blank">
                        <FaGithub alt="click here to visit the project's git hub" size={32}/> GitHub 
                    </a>
                    <a href={'https://pet-pals.netlify.com'} target="_blank">
                        <FaExternalLinkAlt alt="click here to Visit this project's deployed site" size={30} /> See Demo 
                    </a>
                </div>
            </div>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">UX Case Study</h2>
                </div>
                <div className="back">
                    <h3>Accessability Rating</h3>
                    <ul>
                        <li>UX Research | UX Design</li>
                        <li>Volunteer group for non-profit</li>
                        <li>something</li>
                    </ul>
                    <Link to='/ux-case-study'>
                        Learn More
                        <FaArrowRight alt="Learn more about the UX case study" size={32}/> 
                    </Link>                 
                </div>
            </div>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">Accessability Audit</h2>
                </div>
                <div className="back">
                    <h3>Usability Audit</h3>
                    <ul>
                        <li>Figma | React | WCAG</li>
                        <li>Accessability Audit for sustainability start-up</li>
                    </ul>
                    <Link to='/accessability-case-study'>
                        Learn More
                        <FaArrowRight alt="Learn more about the UX case study" size={32}/> 
                    </Link>  
                </div>
            </div>
        </section>
    )
}

export default Projects;
            // <h1>Projects</h1>
            // <ul>
            //     <li>UX Case Study
            //         <Link to='/ProjectsDesign' alt='learn more about design projects'> Learn More →</Link>
            //     </li>
            //     <li>Front End Development
            //         <Link to='/ProjectsFE' alt='learn more about front end software projects'> Learn More →</Link>
            //     </li>
            // </ul>