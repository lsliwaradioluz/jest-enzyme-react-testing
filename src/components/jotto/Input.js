import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../actions/index";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    };
  }

  updateCurrentGuess = (event) => {
    const newGuess = event.target.value;
    this.setState({ currentGuess: newGuess });
  };

  submitGuessedWord = (event) => {
    event.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  };

  render() {
    let contents;
    if (this.props.success) {
      contents = null;
    } else {
      contents = (
        <form>
          <input
            data-test="input-box"
            value={this.state.currentGuess}
            onChange={this.updateCurrentGuess}
          ></input>
          <button
            type="submit"
            data-test="submit-button"
            onClick={this.submitGuessedWord}
          >
            Submit
          </button>
        </form>
      );
    }
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
