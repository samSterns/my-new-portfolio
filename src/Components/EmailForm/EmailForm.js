import React from 'react';

import Pic from '../LandingPage/selfPortrait.png';
import './EmailForm.scss';

export default function EmailForm() {
  return (
      
  <section className="email-form-section">
        <div className="img-wrapper">
        <h1 className="email-h1">Let's Stay in Touch</h1>
            <img style={{height: "250px"}} src={Pic} alt="minimalist vector illustration of a cat"/>
        </div>

        <div>
        <form className="email-form" name="contact" action="/contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />

            <p className="salutation">Dear Sam,</p>

            <div className="input-wrapper">
              {/* <label htmlFor="message-body">Message: </label> */}
              <textarea id="message-body" name="message"></textarea>             
            </div>
            <p className="salutation">Talk to you soon,</p>

            <div className="input-wrapper">
              <label htmlFor="name" >Name:</label>
              <input required type="text" id="name" name="name" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">Email:</label>
              <input required type="email" id="email" name="email" />   
            </div>

        
            <button className="send-btn" alt="submit message to me" type="submit">Send</button>
        </form>
        </div>

  </section>

  );
}

