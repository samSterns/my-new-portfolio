import React from 'react';
import Pic from '../EmailForm/SamZuriPaint.svg'
import './EmailForm.scss';

export default function EmailForm() {
  return (
      
  <section className="email-form-section">
        <div className="img-wrapper">
            <img style={{height: "500px"}} src={Pic} alt="minimalist vector illustration of a cat"/>
        </div>
        <div>
        <h1>Let's Stay in Touch</h1>
        <form className="email-form" name="contact" method="POST" data-netlify="true">

            <p>Dear Sam,</p>

            <div className="input-wrapper">
              {/* <label htmlFor="message-body">Message: </label> */}
              <textarea id="message-body" name="message"></textarea>             
            </div>
            <p>Talk to you soon,</p>

            <div className="input-wrapper">
              <label htmlFor="name" >Your Name:</label>
              <input type="text" id="name" name="name" />
            </div>

            <div className="input-wrapper">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />   
            </div>

        
            <button alt="submit message to me" type="submit">Send</button>
        </form>
        </div>

  </section>

  );
}

