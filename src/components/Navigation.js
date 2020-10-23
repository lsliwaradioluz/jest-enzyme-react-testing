import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <nav>
      <Link to="counter">Counter</Link>
    </nav>
  );
};

export default Navigation;
