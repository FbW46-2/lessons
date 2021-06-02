import "./App.css";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncHandler = () => {
    //this.state.count = this.state.count + 1; wrong to update the state
    this.setState({ count: this.state.count + 1 });
    console.log("counter updated! => ");
  };

  render() {
    return (
      <div className="App">
        <h1>My Counter</h1>
        <button onClick={this.onIncHandler}>+</button>
        <span>Counter: {this.state.count}</span>
        <button>-</button>
      </div>
    );
  }
}

export default Counter;
