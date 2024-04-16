import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import logo from "../images/logo.jpg";
import axios from "axios";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [puuid, setPuuid] = useState("");
  const [summonerId, setSummonerId] = useState("");
  const [playerData, setPlayerData] = useState({});
  const api_key = "RGAPI-79d88b4a-b61a-4669-849e-7645cd486c6c";

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    event.preventDefault();
  };

  // makes API call for users summonerID and data when event is made
  // this function returns players data that can access profileIconId and summonerLevel
  const searchForSummoner = (event) => {
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${api_key}`;

    // use axios to handle API call
    axios
      .get(url)
      .then((response) => {
        console.log(response);
        // set the new state of puuid
        setPuuid(response.data.puuid);
        console.log("puuid", puuid);
        // set the new state with summoners ID
        setPlayerData(response.data);
        console.log("summonerID", playerData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="logoContainer">
        <img src={logo} height="400px" width="700px" />
      </div>

      <h3>Search for any summoner for League of Legends</h3>
      <>
        <input
          type="text"
          placeholder="Enter Summoner Name"
          onChange={handleChange}
          value={searchText}
        />
        <button onClick={(event) => searchForSummoner(event)}>Summoner</button>
      </>
      <>
        <div className="summonerInfo">
          {JSON.stringify(playerData) !== "{}" ? (
            <>
              <p>Summoner Name: {searchText}</p>
              <p>Summoner Level: {playerData.summonerLevel}</p>
              <img style={{margin: "10px"}} height="100" width="100" src={`https://ddragon.leagueoflegends.com/cdn/14.7.1/img/profileicon/${playerData.profileIconId}.png`} alt="" />
            </>
          ) : (
            <p>Sorry, no player to show</p>
          )}
        </div>
      </>
    </>
  );
};

export default Home;
