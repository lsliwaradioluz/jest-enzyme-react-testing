import { actionTypes } from "../actions/index";

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return true;
    default:
      return state;
  }
};
