import "./App.css";
import React, { useState } from "react";

function Counter() {
  //const [name] = React.useState("Alex");
  const [count, setCount] = useState(5);
  const onIncHandler = () => setCount(count + 1);
  const onDecHandler = () => setCount(count - 1);
  return (
    <div className="App">
      <h1>My Counter </h1>
      <button onClick={onIncHandler}>+</button>
      <span>Counter: {count}</span>
      <button onClick={onDecHandler}>-</button>
    </div>
  );
}

export default Counter;

/*
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  onIncHandler = () => {
    //this.state.count = this.state.count + 1; wrong way to update the state
    this.setState({ count: this.state.count + 1 });
    console.log("counter updated! => ");
  };

  
  onDecHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>My Counter</h1>
        <button onClick={this.onIncHandler}>+</button>
        <span>Counter: {this.state.count}</span>
        <button onClick={this.onDecHandler}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
*/
