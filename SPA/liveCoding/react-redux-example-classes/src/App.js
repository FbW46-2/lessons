import React from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
        
    }

    render() {
        return (
            <div className="container">
                <h1>The current count is {this.props.count}</h1>
                <div>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.increment}>Increment</button>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}


export default connect(mapStateToProps)(App);
