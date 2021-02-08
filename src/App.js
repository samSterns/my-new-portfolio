import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import HomePage from './HomePage';
import UXCaseStudy from './Components/UXCaseStudy/UXCaseStudy';
import A11yCaseStudy from './Components/A11yCaseStudy/A11yCaseStudy';

function App() {

  return (
    <Router >
       <Switch>
          <Route path="/ux-case-study">
           <UXCaseStudy />
          </Route>
          <Route path="/accessability-case-study">
            <A11yCaseStudy />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

    </Router>
  );
}

export default App;
