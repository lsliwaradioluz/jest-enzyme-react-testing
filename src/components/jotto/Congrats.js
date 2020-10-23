import React from "react";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          {props.success ? "Congratulations! You've guessed the word!" : null}
        </span>
      </div>
    );
  } else {
    return <p data-test="component-congrats" />;
  }
};

export default Congrats;
