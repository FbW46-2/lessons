import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function C() {
    const yVal = useSelector(state => state.y);
    const dispatch = useDispatch();

    const incrementX = () => {
        dispatch({ type: 'INCREMENT_X' });
    };

    return (
      <div>
        C, y = {yVal}
        <button onClick={incrementX}>Increment X</button>        
      </div>
    )
}

export default C;
