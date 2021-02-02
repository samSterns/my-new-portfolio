import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route, Switch, browserHistory
} from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import EmailForm from './Components/EmailForm/EmailForm';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Router >
      <div className="App">
    
          <Nav />
          <LandingPage />
          <Projects />
          <EmailForm />
      </div>

    </Router>
  );
}

export default App;
