import React, { Component } from 'react'
import '../App.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    state = {
      active: 'me'
    }

    setActive = (linkName) => {
      this.setState({
        active: linkName
      });
    }

    // when the user reloads the page, the component will be mounted
    componentDidMount = () => {
      const currentPath = window.location.pathname;
      if(['/', '/me'].includes(currentPath)) {
        this.setState({
          active: 'me'
        });
      }
      else if(currentPath === '/hobbies') {
        this.setState({
          active: 'hobbies'
        });        
      }
      else if(currentPath === '/contact') {
        this.setState({
          active: 'contact'
        });                
      }
    }

    render() {

      // define the style for an active link
      const activeStyle = { 
        textDecoration: 'underline', 
        fontWeight: 'bold' 
      };

      return (
          <div className="header">
            <div className="logo">About Me</div>
            <div className="navbar">
              <Link to="/" style={this.state.active === 'me' ? activeStyle : null} onClick={this.setActive.bind(this, 'me')}>Me</Link>{' | '}
              <Link to="/hobbies" style={this.state.active === 'hobbies' ? activeStyle : null} onClick={this.setActive.bind(this, 'hobbies')}>Hobbies</Link>{' | '}
              <Link to="/contact" style={this.state.active === 'contact' ? activeStyle : null} onClick={this.setActive.bind(this, 'contact')}>Contact</Link>
            </div>
          </div>
      )
    }
}

export default Header
