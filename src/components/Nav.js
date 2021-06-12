import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const styleNav = {
    color: "white",
    textDecoration: "none",
  };
  return (
    <nav>
      <Link style={styleNav} to="/about">
        <h2>Logo</h2>
      </Link>
      <ul className="nav-links">
        <Link style={styleNav} to="/about">
          <li>About</li>
        </Link>
        <Link style={styleNav} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={styleNav} to="/box">
          <li>Box</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
