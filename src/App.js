import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route, Switch, browserHistory
} from 'react-router-dom';


import EmailForm from './Components/EmailForm/EmailForm';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';

import Footer from './Components/Footer/Footer';

function App() {


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
    <Router >
      <div className="App" className={darkMode ? "dark-mode" : "light-mode"}>
          
      <nav>
        <div className="toggle-container">
        <span style={{ color: darkMode ? "grey" : "#C55337" }}>☀︎</span>
        <span className="toggle">
            <input
            checked={darkMode}
            onChange={() => setDarkMode(prevMode => !prevMode)}
            id="checkbox"
            className="checkbox"
            type="checkbox"
            />
            <label htmlFor="checkbox" />
        </span>
        <span style={{ color: darkMode ? "#19838C" : "grey" }}>☾</span>
        </div>
      </nav>
      <LandingPage/>
      <Projects />
      <EmailForm />
      <Footer />
      </div>

    </Router>
  );
}

export default App;
