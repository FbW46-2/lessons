import React, { Component } from 'react';
import profilePic from '../me.png';
import '../App.scss';

const Me = () => {
    return (
        <div className="me">
            <div>
                <img className="me-photo" src={profilePic} />
            </div>
            <div className="me-description">
                <h2>Manuel Mustermann</h2>
                <p>
                Hi, my name is Manfred Mustermann. I was born in Musterhausen, in Germany. My parents, Manuela and Manfred, procreated me at 21:15 on a Sunday right after "Tatort". Exactly nine months later, I saw the earth the first time in my life. Since then, not really much happened. I went to school and to university, where I studied business, like everyone else. I like main-stream music from Avici and of course I cannot stop dancing to Ed Sheeran.
                </p>
                <p>
                Here are some links I frequently visit:
                <ul>
                    <li><a href="https://www.microsoft.com">Microsoft - For my half-hourly Windows-update</a></li>
                    <li><a href="https://www.youtube.com">Youtube Premium</a></li>
                    <li><a href="https://www.disney.com">Disney!</a></li>
                </ul>
                </p>
            </div>
        </div>
    )
}

export default Me;