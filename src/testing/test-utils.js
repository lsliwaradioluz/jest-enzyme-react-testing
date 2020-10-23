import { shallow } from "enzyme";

export const setup = (component) => shallow(component);

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);
