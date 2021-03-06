import React from 'react';
import './HomePage.scss';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';
// import EmailForm from './Components/EmailForm/EmailForm';
import Footer from './Components/Footer/Footer';

function HomePage() {


  const [darkMode, setDarkMode] = React.useState(getInitialMode());

  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    
      <div id="HomePage" className={darkMode ? "dark-mode" : "light-mode"}>
          
        <nav>
         
          <div className="toggle-container">
          <span style={{ color: darkMode ? "#353130" : "#C55337" }}>☀︎</span>
          <span className="toggle" alt ="CLick here to toggle dark mode">
              <input
              alt ="CLick here to toggle dark mode"
              checked={darkMode}
              onChange={() => setDarkMode(prevMode => !prevMode)}
              id="checkbox"
              className="checkbox"
              type="checkbox"
              />
              <label htmlFor="checkbox" />
          </span>
          <span style={{ color: darkMode ? "#19838C" : "#353130" }}>☾</span>
          </div>
          {/* <ul>
            <li>Projects</li>
            <li>About Me</li>
          </ul> */}

        </nav>

        <LandingPage/>
        <Projects />
        
        <Footer />
      </div>

    
  );
}

export default HomePage;
