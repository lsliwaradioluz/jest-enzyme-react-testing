import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <$Navigation>
      <$Link to="counter">Counter</$Link>
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
  transition: transform .3s;
  display: inline-block;
  &:hover {
    transform: translateY(3px);
  }
`;

export default Navigation;
