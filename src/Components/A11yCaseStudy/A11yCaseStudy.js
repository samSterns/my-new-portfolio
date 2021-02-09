import React from 'react';
import './A11yCaseStudy.scss'
import Pic from '../A11yCaseStudy/logoHome.svg';
import persona1 from '../A11yCaseStudy/assets/persona1.png'
import persona2 from '../A11yCaseStudy/assets/Persona2.png'
import persona3 from '../A11yCaseStudy/assets/Persona3.png'
import persona4 from '../A11yCaseStudy/assets/Persona4.png'
import { Link } from 'react-router-dom';

const A11yCaseStudy = () => {

    function getPrefColorScheme() {
        if (!window.matchMedia) return;
    
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      }

    const darkMode = getPrefColorScheme();

    return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <header className="header" > 
            <Link to='/'>
                <img style={{height: '40px'}} src={Pic} alt="back to main page" />
            </Link>
        </header>

        <div id="container-case-study">
            <h1 className="title">Accessability Ratings App Case Study</h1>
            <p className="sub-title">A crowd-sourced disability community platform to rate digital products</p>

            <div className="wrapper">
                <h2>The Problem</h2>
                <p>Online reviews do not provide a good user experience for someone who has low-vision or uses a screen reader. </p>
                <ul>
                    <li>How can we improve the experience for people with disabilities when reading or listening to reviews? </li>
                    <li> How can we create a trusted community and gather informative reviews?</li> 
                    <li>How can we improve searching through reviews to find accessability related topics?</li>
                </ul>
            </div>
            <div className="wrapper">
            <h2>My Contributions</h2>
                <h3>User Research</h3>
                    <ul>Research Methodologies: 10 Interviews and 25 Surveys and still counting</ul>
                        <li>I created criteria and sourced stakeholders, people with disabilities, allies, and design industry experts. </li>
                        <li>My interview and survey questions were carefully selected. I specifically asked questions oriented around current habits. I asked more how questions as apposed to why questions because my goal was to get a deeper understanding of how low-vision and screen reader users approached searching for reviews.</li>
                        <li>After each interview and survey submission, I  conducted a Thematic Analysis by analyzing my notes with a color coordinated highlighting referencing different themes and wrote a synopsis for the design team.</li>
                        <li>After synthesizing my qualitative and quantitative data, I created <em>Personas</em> and <em>Use Cases</em> on Figma to share with the design and development teams as well as stakeholders.</li>
                        <li>I conducted follow up research based on my findings. Including market research to learn more about the apps and assistive devices people had mentioned. As well as document the ways the app stores and other major sites let users post reviews.</li>
                        <div className="persona-img-wrapper">
                            <img className="persona-img" src={persona1} alt='user persona'/>
                            <img className="persona-img" src={persona2} alt='user persona'/>
                            <img className="persona-img" src={persona3} alt='user persona'/>
                            <img className="persona-img" src={persona4} alt='user persona'/>
                        </div>
               
            </div>
                
            <div className="wrapper">
            <h2>What I Learned</h2>
                <h3>More about Human Centered Design's Research and Inspiration</h3>
                <p>While creating a product for people with disabilities it is imperative to understand how people other than you navigate a website. Through research and interviews I learned a lot more about screen readers and other assistive devices and gained a greater sense of empathy. </p>
           
                <h3>Collaborating with a team of designers on a long-term project</h3>
                <p>It was a pleasure to take the time and truly research potential users. With this project I combined all my existing familiarity with digital accessability and I got to interview people for about a month, which set me up to design for others and not myself. The project is currently implementing and testing our designs.</p>
            </div>
        </div>
    </div>
    )
}

export default A11yCaseStudy;