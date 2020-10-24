import React from "react";
import { findByTestAttr, checkProps } from "../../testing/test-utils";
import { shallow } from "enzyme";
import Congrats from "./Congrats";

const setup = (props = {}) => shallow(<Congrats {...props} />);

test("renders without errors", () => {
  const wrapper = setup({ success: false });
  const appComponent = findByTestAttr(wrapper, "component-congrats");
  expect(appComponent.length).toBe(1);
});
test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const text = findByTestAttr(wrapper, "component-congrats").text();
  expect(text).toBe("");
});
test("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message").text();
  expect(message.length).not.toBe(0);
});
test("throws no error with props of the right type", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
