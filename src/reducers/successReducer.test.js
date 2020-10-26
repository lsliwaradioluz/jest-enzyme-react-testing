import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";

test("returns default initial state of false when no action is passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type `GUESS_WORD`", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.GUESS_WORD,
  });
  expect(newState).toBe(true);
});
