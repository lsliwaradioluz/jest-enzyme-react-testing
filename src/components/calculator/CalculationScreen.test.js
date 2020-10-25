import React from "react";
import CalculationScreen from "./CalculationScreen";
import { findByTestAttr } from "../../testing/test-utils";
import { shallow } from "enzyme";

const setup = () => shallow(<CalculationScreen />);

describe("CalculationScreen component", () => {
  test("renders without errors", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(
      wrapper,
      "component-calculation-screen"
    );
    expect(appComponent.length).toBe(1);
  });
  test("shows 0 initially", () => {
    const wrapper = setup();
    expect(wrapper.text()).toBe("0");
  });
});
