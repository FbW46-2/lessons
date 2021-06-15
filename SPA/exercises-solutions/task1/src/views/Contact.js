import React, { Component } from 'react';
import '../App.scss';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Send me a message!</h2>
            <input type="text" placeholder="Enter your name here" />
            <input type="text" placeholder="Enter your email here" />
            <textarea placeholder="Enter message here" rows="6"></textarea>
            <button>Send</button>
        </div>
    )
}

export default Contact;