import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div data-test="component-app">
      <h1>
        The counter is currently at{" "}
        <span data-test="counter-display">{count}</span>
      </h1>
      <button
        onClick={incrementCounter}
        type="button"
        data-test="increment-button"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
