import React, { useState } from 'react';
import './App.css';

function Counter () {
const [count, setCount ] = useState(0);

const handleCount = () => {
    setCount(count + 1);
}

return (
  <>
    <div>
      <p id="counter">{count}</p>
    </div>
    <button onClick={handleCount}>Click me!</button>
    <div></div>
  </>
);

}

export default Counter;