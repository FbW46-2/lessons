import React from 'react'
import { useSelector, useDispatch  } from 'react-redux';

function B() {
    const xVal = useSelector(state => state.x);
    const dispatch = useDispatch();

    const incrementY = () => {
        dispatch({ type: 'INCREMENT_Y' });
    };

    return (
        <div>
            B, x = {xVal}
            <button onClick = {incrementY}>Increment Y</button>
        </div>
    );
};

export default B;
