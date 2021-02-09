import React from 'react';
import { Link } from 'react-router-dom';
import './UXCaseStudy.scss';
import Pic from './logoHome.svg';

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
              <h2>Process</h2>
              <ul>
                <li>I completed the audit using WAVE and manual testing</li>
                <li>I tested my solutions with tools like google's accessability dev tools, contrast checkers, WCAG2.0 AA standards, my own design project-specific heuristics, and usability testing.</li>
              </ul>
            </div>
            <div className="wrapper">
              <h2>Color Contrast</h2>
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="wrapper">
              <h2>Information Architecture</h2>
              <ul>
                <li></li>
                <li></li>
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