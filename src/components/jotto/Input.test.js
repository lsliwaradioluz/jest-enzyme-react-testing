import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../testing/test-utils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory();
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe("render", () => {
  describe("when the word has not been guessed", () => {
    test("renders component without error", () => {});
    test("renders the input box", () => {});
    test("renders the submit button", () => {});
  });
  describe("when the word has been guessed", () => {
    test("renders component without error", () => {});
    test("does not render the input box", () => {});
    test("does not render the submit button", () => {});
  });
});

describe("update state", () => {});
