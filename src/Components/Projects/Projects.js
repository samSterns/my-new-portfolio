import React from 'react';
import './Project.scss';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">MOUNTAIN</h2>
                </div>
                <div className="back">
                <h3>Angular</h3>
                <p>Good tools make application development quicker and easier to maintain than if you did everyth1ng by hand..</p>
                </div>
            </div>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">LAKE</h2>
                </div>
                <div className="back">
                <h3>Angular</h3>
                <p>Good tools make application development quicker and easier to maintain than if you did everyth2ng by hand..</p>
                </div>
            </div>
            <div className="flip">
                <div className="front">
                <h2 className="text-shadow">OCEAN</h2>
                </div>
                <div className="back">
                <h3>Angular</h3>
                <p>Good tools make application development quicker and easier to maintain than if you did everyth1ng by hand..</p>
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