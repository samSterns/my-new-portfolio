import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import './Project.scss';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Projects = () => {

    let history = useHistory();

    const redirect = () => {
      history.push('/your-path')
    }
    return (
        <section>
            
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">Front End Project</h2>
                </div>
                <div className="back">
                    <h3>Pet Pals</h3>
                    
                        <p>React.js | Sass | NPM</p>
                        <p>Contributed to the information architecture and chat feature</p>
                    
                    <a className="link-with-icon" href={'https://github.com/Pet-Project-Alchemy'} target="_blank" rel="noreferrer">
                        <FaGithub alt="click here to visit the project's git hub" size={32}/> 
                    </a>
                    <a className="link-with-icon" href={'https://pet-pals.netlify.com'} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt alt="click here to Visit this project's deployed site" size={30} />
                    </a>
                </div>
            </div>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">UX Case Study</h2>
                </div>
                <div className="back">
                    <h3>Accessability Rating</h3>
                        <p>UX Research | UX Design</p>
                        <p>Human Centered Design</p>
                        <p>Volunteer design team for non-profit w/ Democracy Lab</p>
                    <Link className="link-with-icon" to='/accessability-case-study' key ={'Access'}>
                        
                        <FaArrowRight alt="Learn more about the UX case study" size={32}/> 
                    </Link>                 
                </div>
            </div>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">Audit Case Study</h2>
                </div>
                <div className="back">
                    <h3>Usability Audit </h3>
            
                        <p>Figma | React | WCAG</p>
                        <p>Accessability Audit for sustainability B2B start-up</p>
                        <p>Designed and developed solutions</p>
                 
                    <Link className="link-with-icon" to='/ux-case-study'>
                
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