import React, {useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { connect } from 'react-redux';


function App() {

    // const [count, setCount] = useState(0);

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const increment = () => {
        // setCount(count => count + 1);
        dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        // setCount(count => count - 1);
        dispatch({ type: 'DECREMENT' });

    }

    return (
        <div className="container">
            <h1>The current count is {count}</h1>
            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );

}

export default App;

// function mapStateToProps(state) {
//     return {
//         count: state.count
//     }
// }

// export default connect(mapStateToProps)(App);
