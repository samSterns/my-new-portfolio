import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <ul>
                <li>UX Case Study
                    <Link to='/ProjectsDesign' alt='learn more about design projects'> Learn More →</Link>
                </li>
                <li>Front End Development
                    <Link to='/ProjectsFE' alt='learn more about front end software projects'> Learn More →</Link>
                </li>
            </ul>

        </section>

    )
}

export default Projects;