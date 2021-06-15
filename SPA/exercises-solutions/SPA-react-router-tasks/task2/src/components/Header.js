import React from 'react'
import '../App.scss';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className="header">
          <div className="logo">About Me</div>
          <div className="navbar">
            <Link to="/">Me</Link>{' | '}
            <Link to="/hobbies">Hobbies</Link>{' | '}
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    )
}

export default Header
