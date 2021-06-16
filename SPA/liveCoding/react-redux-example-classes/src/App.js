import React from 'react';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    render() {
        return (
            <div className="container">
                <h1>The current count is {this.state.count}</h1>
                <div>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.increment}>Increment</button>
                </div>
            </div>
        );
    }

}

export default App;
