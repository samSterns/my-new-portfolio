import React, { Component } from 'react';
import Pic from '../LandingPage/selfPortrait.png';

export default class LandingPage extends Component {

  render(){

    return (
      <main>
        <img style={{height: "100px"}} src={Pic} />
        <h1>Sam Sterns is a Product Designer & Front End Developer who believes technology is a tool to build equity, which is why they focus on creating inclusive, impactful, and maintainable digital products. </h1>
      </main>
       
    );
    
  }
}