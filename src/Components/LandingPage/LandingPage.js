import React, { Component } from 'react';
import Pic from '../LandingPage/selfPortrait.png';
import './LandingPage.scss'

export default class LandingPage extends Component {

  render(){

    return (
      <main>
        <img style={{height: "100px"}} src={Pic} alt="self-portrait illustration"/>
        <h1 className="title-name">Sam G Sterns</h1>
        <h2>Product Designer & Front End Developer</h2>
        <p>I believe technology is a tool to build equity, which is why they focus on creating inclusive, impactful, and maintainable digital products.</p> 
      </main>
       
    );
    
  }
}