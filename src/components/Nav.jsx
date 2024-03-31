import React from "react";
import '../styles/Nav.css'
import { SvgIcon } from "@mui/material";


const Nav = () => {
  return (
    <>
      <nav className="navContainer">
        <ul className="navList">
          <li className="navItem">
            Home
          </li>
          <li className="navItem">Champions</li>
          <li className="navItem">Match History</li>
          <li className="navItem">Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
