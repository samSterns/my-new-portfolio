import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import EmailForm from './Components/EmailForm/EmailForm';
import LandingPage from './Components/LandingPage/LandingPage';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
  
        <Nav />
        <LandingPage />
        <Projects />
        <EmailForm />
    </div>
  );
}

export default App;
