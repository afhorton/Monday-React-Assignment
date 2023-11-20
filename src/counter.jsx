import React, { useState, useEffect } from 'react';
import './App.css';

function Counter () {
const [count, setCount ] = useState(0);
const [running, setRunning] = useState(false);
let intervalId = null;

const handleCount = () => {
    setCount(count + 1);
}

const handleStart = () => {
   if (!running) {
    setRunning(true);
   } 
}

const handleStop = () => {
    if (running) {
    setRunning(false);
    }
}
useEffect(() => {
    if (running) {
    intervalId = setInterval(() => {handleCount();}, 3000)
    return () => {
        if(intervalId) {
            clearInterval(intervalId);
        
        }
    }
}
},[count, running])

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
    <div className="controlDiv">
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  </>
);

}

export default Counter;