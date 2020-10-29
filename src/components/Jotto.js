import React, { Component } from "react";
import Congrats from "./jotto/Congrats";
import GuessedWords from "./jotto/GuessedWords";
import { connect } from "react-redux";
import { getSecretWord } from "../actions/index";
import Input from "../components/jotto/Input";

export class UnconnectedJotto extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div>
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ secretWord, success, guessedWords }) => {
  return { secretWord, success, guessedWords };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedJotto);
