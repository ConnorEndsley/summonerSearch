import React from "react";
import "../styles/Nav.css";
import { SvgIcon } from "@mui/material";

const Nav = () => {
  return (
    <>
      <nav className="navContainer">
        <h2 className="title">Summoner Search</h2>
        <ul className="navList">
          <li className="navItem">Home</li>
          <li className="navItem">Champions</li>
          <li className="navItem">Match History</li>
          <li className="navItem">Contact Us</li>
          {/* <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li> */}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
