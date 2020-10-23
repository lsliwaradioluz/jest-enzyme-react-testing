import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false)

  const decrementCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setError(true)
    }
  };

  const incrementCounter = () => {
    setCount(count + 1);
    setError(false)
  };

  return (
    <div data-test="component-app">
      <h1>
        The counter is currently at{" "}
        <span data-test="counter-display">{count}</span>
      </h1>
      <button
        onClick={decrementCounter}
        type="button"
        data-test="decrement-button"
      >
        Decrement
      </button>
      <button
        onClick={incrementCounter}
        type="button"
        data-test="increment-button"
      >
        Increment
      </button>
      {error ? (
        <p data-test="error-message">The count can not go below 0!</p>
      ) : null}
    </div>
  );
};

export default Counter;
