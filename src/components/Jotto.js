import React, { Component } from "react";
import Congrats from "./jotto/Congrats";
import GuessedWords from "./jotto/GuessedWords";

class Jotto extends Component {
  render() {
    return (
      <div>
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}

export default Jotto;
