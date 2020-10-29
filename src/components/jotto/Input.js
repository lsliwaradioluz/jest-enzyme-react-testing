import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../actions/index";

export class UnconnectedInput extends Component {
  render() {
    let contents;
    if (this.props.success) {
      contents = null;
    } else {
      contents = (
        <form>
          <input data-test="input-box"></input>
          <button
            type="submit"
            data-test="submit-button"
            onClick={this.props.guessWord}
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
