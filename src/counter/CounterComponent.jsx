import React from 'react';

export const Counter = ({current, increment, decrement}) => (
    <div>
        <button className="decrement-button" onClick={decrement}>-</button>
        <span>{current}</span>
        <button className="increment-button" onClick={increment}>+</button>
    </div>
)