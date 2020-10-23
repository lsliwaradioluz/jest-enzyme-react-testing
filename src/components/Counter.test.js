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
test("clicking decrement button with counter at 0 does nothing", () => {
  const wrapper = setup(<Counter />);
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "counter-display").text();
  expect(count).toBe("0");
});
test("show error message when clicking decrement button with counter at 0", () => {
  const wrapper = setup(<Counter />);
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const errorMessage = findByTestAttr(wrapper, "error-message");
  expect(errorMessage.length).toBe(1);
});
test("clicking increment button increments counter display", () => {
  const wrapper = setup(<Counter />);
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "counter-display").text();
  expect(count).toBe("1");
});
test("clicking increment button clears the error message", () => {
  const wrapper = setup(<Counter />)
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const incrementButton = findByTestAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const errorMessage = findByTestAttr(wrapper, "error-message")
  expect(errorMessage.length).toBe(0)
})
test("clicking decrement button with counter above 0 decrements count", () => {
  const wrapper = setup(<Counter />);
  const decrementButton = findByTestAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const count = findByTestAttr(wrapper, "counter-display").text();
  expect(count).toBe("0");
});
