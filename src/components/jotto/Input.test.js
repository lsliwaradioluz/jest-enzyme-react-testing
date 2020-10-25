import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../testing/test-utils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory();
  return shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe("render", () => {
  describe("when the word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup();
    });
    test("renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders the input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box")
      expect(inputBox.length).toBe(1);
    });
    test("renders the submit button", () => {
      const submitButton = findByTestAttr(wrapper, "submit-button")
      expect(submitButton.length).toBe(1);
    });
  });
  describe("when the word has been guessed", () => {
    test("renders component without error", () => {});
    test("does not render the input box", () => {});
    test("does not render the submit button", () => {});
  });
});

describe("update state", () => {});
