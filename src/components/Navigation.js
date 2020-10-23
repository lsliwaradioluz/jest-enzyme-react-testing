import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <$Navigation>
      <$Link to="counter">Counter</$Link>
      <$Link to="jotto">Jotto</$Link>
    </$Navigation>
  );
};

const $Navigation = styled.nav`
  padding: 1rem 0;
  border-bottom: 1px solid lightgray;
`;

const $Link = styled(Link)`
  text-decoration: none;
  color: black;
  transition: transform 0.3s;
  display: inline-block;
  margin-right: 0.75rem;
  &:hover {
    transform: translateY(3px);
  }
  &.active {
    color: red;
  }
`;

export default Navigation;
