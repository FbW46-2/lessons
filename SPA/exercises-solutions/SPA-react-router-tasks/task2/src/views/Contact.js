import React, { Component } from 'react';
import '../App.scss';

class Contact extends Component {
    
    state = {
        name: '',
        email: '',
        message: '',
        messageSent: false
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    send = () => {
        const { name, email, message } = this.state;
        // non-empty fields
        if(!(name.length > 0 && email.length > 0 && message.length > 0)) {
            alert('Name, email and message cannot be empty');
            return;
        }

        // email validation
        const emailParts = email.split('@');
        if(emailParts.length !== 2) {
            alert('Email is invalid.');
            return;
        }

        const leftPart = emailParts[0];
        
        if(emailParts[0].length < 3) {
            alert('Left part of email must at least contain three characters');
            return;
        }
        
        // all numbers
        const numbers = '01234567890';
        // go through each letter of the left part
        let numbersFound = 0;
        for(let i=0; i<leftPart.length; i++) {
            // the i-th character of the left email part
            const character = leftPart[0][i]
            for(let j=0; j<numbers.length; j++) {
                if(character === numbers[j]) {
                    numbersFound++;
                    break;
                }
            }
        }
        
        if(numbersFound === leftPart.length) {
            alert('Left part of email must at least contain one non-numeric character.');
            return;
        }

        // name the right part
        const rightPart = emailParts[1];
        
        // no two consecutive dots
        if(rightPart.includes('..')) {
            alert('Right part cannot contain two consecutive dots.');
            return;            
        }

        // split the right part of the email into domain-ending and domain
        const rightSubParts = rightPart.split('.');
        const domainEnding = rightSubParts[rightSubParts.length - 1];
        const allowedDomains = ['de', 'com', 'net', 'org'];
        if(!allowedDomains.includes(domainEnding)) {
            alert('Domain ending is not allowed.');
            return;
        }

        // check, if the domain name part is at least 3 characters (1 for the dot)
        if((rightPart.length - domainEnding.length - 1) < 3) {
            alert('Domain name is too short.');
            return;
        }

        // check if the message length is between 10 and 160 characters
        if(!(message.length > 10 && message.length < 160)) {
            alert('Message must be between 10 and 160 characters.');
            return;            
        }

        // we arrive here if we have passed all the checks
        // ... so we can empty the textboxes 
        this.setState({
            name: '',
            email: '',
            message: '',
            messageSent: true
        });

    }

    render() {
        return (
            <div className="contact">
                { !this.state.messageSent && 
                <React.Fragment>
                    <h2>Send me a message!</h2>
                    <input type="text" name="name" onChange={this.onChange} placeholder="Enter your name here" value={this.state.name} />
                    <input type="text" name="email" onChange={this.onChange} placeholder="Enter your email here" value={this.state.email} />
                    <textarea name="message" onChange={this.onChange} placeholder="Enter message here" rows="6" value={this.state.message} />
                    <button onClick={this.send}>Send</button>
                </React.Fragment>
                }
                {
                    this.state.messageSent && <h2>Thanks for your message!</h2>
                }
            </div>
        )
    }
}

export default Contact;