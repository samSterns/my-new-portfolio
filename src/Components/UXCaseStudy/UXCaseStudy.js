import React from 'react';
import { Link } from 'react-router-dom';
import './UXCaseStudy.scss';
import Pic from './logoHome.svg';
import beforeImg1 from './assets/beforeImg.png';

const UXCaseStudy = () => {

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
            <h1 className="title">Accessability Audit Case Study</h1>
            <p className="sub-title">Audit of usability issues and accessability requirements for a B2B start-up including designing the solutions, and implemented the code.</p>

            <div className="wrapper">
              <h2>Design and Development Process</h2>
              <ul>
              <h3>Research</h3>
                <li>Conducted research about how to do an audit </li>
                <li>Met with the clients and users to understand the problems</li>
                <li> Completed the audit using WAVE and manual testing </li>
              <h3>Analysis</h3>
                <h4>Tested my solutions with:</h4>
                  <ul>
                    <li>Google's accessability dev tools</li>
                    <li>Contrast checkers</li>
                    <li>WCAG 2.0 AA standards</li>
                    <li>Project-specific Design heuristics</li>
                  </ul> 
              <h3>Test</h3>
                <li>Created mock-ups in Figma</li>
                <li>Executed lean usability testing</li>
              <h3>Deliver</h3>
                <li>Implemented code in Scss, JSX, React.js</li>
              </ul>
            </div>
            <div className="wrapper">
              <h2>Color Contrast</h2>
              <ul>
                <li><img style={{height: '250px'}} src={beforeImg1} alt="back to main page" /></li>
                <li>Throughout the application I cleaned up the color choices by ensuring the correct contract ratios and limiting the number of accent colors</li>
                <li>To increase usability I ensured button consistency too. Some buttons looks more like links because they lacked an outlines while the status updates looked like buttons</li>
              </ul>
            </div>
            <div className="wrapper">
              <h2>Information Architecture</h2>
              <ul>
                <li>Correctly implemented semantic HTML with the use of header tags and landmarks</li>
                <li>Taught the development team about not using headers for styling purposes</li>
              </ul>
            </div>
            <div className="wrapper">
              <h2>What I Learned</h2>
              <ul>
                <li>I learned how to complete an accessability audit (obvious, but it was a new venture.</li>
                <li>Implementing solutions into legacy code can be a greater task than designing from scratch</li>
                <li>I sharpened my knowledge of WCAG requirements and digital accessability while documenting my finding and code implementations</li>
                <li>I learned more about color consistency and executing it through Scss variables</li>
              </ul>
            </div>
        </div>
      </div>

    )
}

export default UXCaseStudy;