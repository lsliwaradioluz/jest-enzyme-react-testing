import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "../testing/test-utils";
import Jotto from "./Jotto";
import { UnconnectedJotto } from "./Jotto";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Jotto store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("redux props", () => {
  test("receives `secretWord`", () => {
    const secretWord = "party";
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test("receives `success`", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test("receives `guessedWords`", () => {
    const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test("receives `getSecretWord`", () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe("unconnectedApp", () => {
  test("calls `getSecretWord` on mount", () => {
    const getSecretWordMock = jest.fn();
    const props = {
      success: false,
      guessedWords: [],
      getSecretWord: getSecretWordMock,
    };

    const wrapper = shallow(<UnconnectedJotto {...props} />);
    wrapper.instance().componentDidMount()
    const getSecretWordMockCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordMockCallCount).toBe(1);
  });
});
