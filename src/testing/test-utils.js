import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import rootReducer from "../reducers/index";
import { middlewares } from "../configureStore";
import { createStore, applyMiddleware } from "redux";

export const setup = (component) => shallow(component);

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

export const storeFactory = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};
