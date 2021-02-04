import React, { Component } from 'react';
import Pic from '../EmailForm/SamZuriPaint.svg'
import './LandingPage.scss'

export default class LandingPage extends Component {

  render(){

    return (
      <main>
        <div className="title-wrapper">
          <h1 className="title-name">Sam G Sterns</h1>
          <h2>Product Designer & Front End Developer</h2>
          <p>I believe technology is a tool to build equity, which is why they focus on creating inclusive, impactful, and maintainable digital products.</p> 
        </div>
        <img style={{height: "70vh"}} src={Pic} alt="self-portrait illustration"/>
      </main>
       
    );
    
  }
}