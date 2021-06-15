import React, { Component } from 'react';
import cycling1 from '../images/cycling_1.jpg';
import cycling2 from '../images/cycling_2.jpg';
import cycling3 from '../images/cycling_3.jpg';
import cycling4 from '../images/cycling_4.jpg';
import swimming1 from '../images/swimming_1.jpg';
import swimming2 from '../images/swimming_2.jpg';
import swimming3 from '../images/swimming_3.jpg';
import swimming4 from '../images/swimming_4.jpg';
import coding1 from '../images/coding_1.png';
import coding2 from '../images/coding_2.jpg';
import coding3 from '../images/coding_3.jpg';
import coding4 from '../images/coding_4.jpg';
import '../App.scss';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <div className="hobby">
                <h2>Cycling</h2>
                <div className="hobby-images">
                    <img src={cycling1} />
                    <img src={cycling2} />
                    <img src={cycling3} />
                    <img src={cycling4} />
                </div>
            </div>
            <div className="hobby">
                <h2>Swimming</h2>
                <div className="hobby-images">
                    <img src={swimming1} />
                    <img src={swimming2} />
                    <img src={swimming3} />
                    <img src={swimming4} />
                </div>
            </div>
            <div className="hobby">
                <h2>Coding</h2>
                <div className="hobby-images">
                    <img src={coding1} />
                    <img src={coding2} />
                    <img src={coding3} />
                    <img src={coding4} />
                </div>
            </div>
        </div>
    )
}

export default Hobbies;