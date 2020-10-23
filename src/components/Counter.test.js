import React from "react";
import Counter from "./Counter";
import { setup, findByTestAttr } from "../testing/test-utils";


test("renders without error", () => {
  const wrapper = setup(<Counter />);
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("renders a button", () => {
  const wrapper = setup(<Counter />);
  const appButton = findByTestAttr(wrapper, "increment-button");
  expect(appButton.length).toBe(1);
});
test("renders counter display", () => {
  const wrapper = setup(<Counter />);
  const counterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
test("counter starts at 0", () => {
  const wrapper = setup(<Counter />);
  const count = findByTestAttr(wrapper, "counter-display").text();
  expect(count).toBe("0");
});
test("clicking button increments counter display", () => {
  const wrapper = setup(<Counter />);
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "counter-display").text();
  expect(count).toBe("1");
});
