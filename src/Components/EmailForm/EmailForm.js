import React from 'react';
import Pic from '../EmailForm/SamZuriPaint.svg'

export default function EmailForm() {
  return (
      <>

        <div>
            <img style={{height: "100px"}} src={Pic} />
        </div>
        <div>
        <h1>Let's Stay in Touch</h1>
        <form name="contact" method="POST" data-netlify="true">
            <label htmlFor="name" >Name:</label>
            <input type="text" id="name" name="name" />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />  

            <label htmlFor="subject">Subject: </label>
            <input type="text" id="subject" name="subject"/>  

            <label htmlFor="message-body">Message: </label>
            <textarea id="message-body" name="message"></textarea>
        
            <button type="submit">Send</button>
        </form>
        </div>
    </>
  );
}

