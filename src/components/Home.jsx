import React from "react";
import { Fragment } from "react";
import logo from '../images/logo.jpg'

const Home = () => {
  return (
<>
    <div className="logoContainer">
        <img src={logo} height="400px" width="700px" />
    </div>

    <h3>
        Search for any summoner for League of Legends
    </h3>
    <>
    <input type="text" />
    <button>Summoner</button>
    </>
</>
  );
};

export default Home;
