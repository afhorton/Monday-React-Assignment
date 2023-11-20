import React, { useState, useEffect } from 'react';
import './App.css';

function Counter () {
const [count, setCount ] = useState(0);
let intervalId = null;

const handleCount = () => {
    setCount(count + 1);
}

useEffect(() => {
    intervalId = setInterval(() => {handleCount();}, 3000)
    return () => {
        if(intervalId) {
            clearInterval(intervalId);
        
        }
    }
},[count])

const handleReset = () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
  setCount(0);
};

return (
  <>
    <div>
      <p className="counter">{count}</p>
    </div>
    <div className="controlDiv">
    <button onClick={handleCount}>Click me!</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  </>
);

}

export default Counter;