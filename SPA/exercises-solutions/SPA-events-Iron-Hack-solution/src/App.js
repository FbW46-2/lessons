import React, { Component } from 'react';
import User from './components/User';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
      avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Ana",
      avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
    },
    clickCount: 0,
    backColor: 'yellow',
    bootcamp: 'Ironhack'
  };


  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {
    if (this.state.clickCount % 5 === 0) {
      this.setState({ 
        backColor: this.colorMapper(),
        clickCount : this.state.clickCount + 1
      })
    }
    else {
      this.setState( { clickCount : this.state.clickCount + 1 } );
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1>React - state</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}> Click me </button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          bootcampName={this.state.bootcamp}
           />
        <User 
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          bootcampName={this.state.bootcamp}
           />
      </div>
    );
  }
}

export default App;