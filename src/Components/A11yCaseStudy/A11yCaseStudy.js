import React from 'react';
import { Link } from 'react-router-dom';
import './A11yCaseStudy.scss'
import Pic from '../A11yCaseStudy/logoHome.svg';
import persona1 from '../A11yCaseStudy/assets/persona1.png'
import persona2 from '../A11yCaseStudy/assets/Persona2.png'
import persona3 from '../A11yCaseStudy/assets/Persona3.png'
import persona4 from '../A11yCaseStudy/assets/Persona4.png'
import flow1 from '../A11yCaseStudy/assets/UserFlow_Search.png'
import flow2 from '../A11yCaseStudy/assets/UserFlow_Review.png'
import story1 from '../A11yCaseStudy/assets/Storyboard_search.png'
import story2 from '../A11yCaseStudy/assets/Storyboard_postReview.png'
import sticky1 from '../A11yCaseStudy/assets/sticky1.png'
import atomicDesign from '../A11yCaseStudy/assets/Atomic_Design.png'
import palette from '../A11yCaseStudy/assets/ColorPallet_Contrast_ColorblindViews.svg'

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

        <div id="container-case-study-a11y">
            <h1 className="title">Accessability Ratings App Case Study</h1>
            <p className="sub-title">A crowd-sourced disability community platform to rate digital products</p>

            <div className="wrapper">
                <h2>The Problem</h2>
                <p>Online reviews do not provide a good user experience for someone who has low-vision or uses a screen reader. </p>
                <ul>
                    <li> How can we improve the experience for people with disabilities when reading or listening to reviews? </li>
                    <li> How can we create a trusted community and gather informative reviews?</li> 
                    <li> How can we improve searching through reviews to find accessability related topics?</li>
                </ul>
            </div>

            <div className="wrapper">
            <h2>My Contributions</h2>
            <a className="link-with-icon" href={'https://www.figma.com/proto/00I3py98M15NPWp0uKXOAB/A11y_Project_Personas?node-id=305%3A1668&scaling=min-zoom'} target="_blank" rel="noreferrer"> Figma Prototype </a>
            <a className="link-with-icon" href={'https://github.com/Accessifiers/AccessibilityRatings'} target="_blank" rel="noreferrer">   |  Git Hub</a>
                <h3>User Research</h3>
                    <p>Research Methodologies: 10 Interviews, 25 Surveys, and counting</p>
                    <ul>
                        <li>I created criteria and sourced stakeholders, people with disabilities, allies, and design industry experts. </li>
                        <li>My interview and survey questions were carefully selected. I specifically asked questions oriented around current habits. I asked more how questions as apposed to why questions because my goal was to get a deeper understanding of how low-vision and screen reader users approached searching for reviews.</li>
                        <li>After each interview and survey submission, I  conducted a Thematic Analysis by analyzing my notes with a color coordinated highlighting referencing different themes and wrote a synopsis for the design team.</li>
                        <li>After synthesizing my qualitative and quantitative data, I created <em>Personas</em> and <em>Use Cases</em> on Figma to share with the design and development teams as well as stakeholders.</li>
                        <li>I conducted follow up research based on my findings. Including market research to learn more about the apps and assistive devices people had mentioned. As well as document the ways the app stores and other major sites let users post reviews.</li>
                    </ul>
                    <div className="persona-img-container">
                        <div className="persona-img-wrapper">
                            <img className="persona-img" src={persona1} alt='user persona'/>
                            <img className="persona-img" src={persona2} alt='user persona'/>
                            <img className="persona-img" src={persona3} alt='user persona'/>
                            <img className="persona-img" src={persona4} alt='user persona'/>
                        </div>
                    </div>
               <h3>Storyboards</h3>
                    <p>Empathy building for people with disabilities as they use similar products.</p>
                    <h4>Searching Reviews</h4>
                    <img className="persona-img" src={story1} alt='storyboard'/>
                    <h4>Posting Reviews</h4>
                    <img className="persona-img" src={story2} alt='storyboard'/>
               
               <h3>User FLows</h3>
                    <h4>Searching Reviews</h4>
                    <img className="persona-img" src={flow1} alt='user flow'/>
                    <h4>Posting Reviews</h4>
                    <img className="persona-img" src={flow2} alt='user flow'/>
                <h3>Design System</h3>
                    <h4>Atomic Design</h4>
                    <img className="persona-img" src={atomicDesign} alt='colors and symbols create small components, which then make up the large components'/>
                    <p>The small atoms of colors and typography create the molecules of small components like buttons. Large organism, like this header for example, is composed of molecules using the same elemental particles to create a cohesive Design System.</p>
                    <h4>High Contrast Color Pallet</h4>
                    <img className="persona-img" src={palette} alt='color palette'/>
                    <p>All of the colors meet the Web Content Accessability Guideline of being perceivable by having a color contrast greater than 4.5 no matter a users perception of color.</p>
               
            </div>
                
            <div className="wrapper">
            <h2>What I Learned</h2>
                <h3>More about Human Centered Design's Research and Inspiration</h3>
                <p>While creating a product for people with disabilities it is imperative to understand how people other than yourself navigate a website. I had done my fair share of online research about accessability for other coding projects, but learning people's experiences first hand allows for a depth of understanding that you just can't get from reading. Through research and interviews I learned a lot more about screen readers and other assistive devices. The deep dive into our user's experience gave me a greater sense of empathy and renewed my passion for creating inclusive technology. It was a pleasure to take the time and truly research potential users. With this project I combined all my existing familiarity with digital accessability and I got to interview people for about a month, which set me up to design for others and not myself.</p>
           
                <h3>Collaborating with a remote team of designers on a long-term project</h3>
                <p> I am collaborating with the other designers. We currently implementing and testing our designs. It is amazing to work on a team of people who self selected to do a project around accessability. The collaboration across the country has taught me about the process of iteration and critique. We have struck a balance between convergent collaboration and divergent autonomous work, and we have developed a report that allows for radical candor.</p>
                <img className="persona-img" src={sticky1} alt='the cliche sticky notes'/>
                <figcaption>What is a case study without the sticky note screenshot?</figcaption>
            </div>
        </div>
    </div>
    )
}

export default A11yCaseStudy;