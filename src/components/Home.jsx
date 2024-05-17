import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import logo from "../images/logo.jpg";
import axios from "axios";

const Home = () => {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [puuId, setPuuId] = useState("");
  const [matchList, setMatchList] = useState([]);

  useEffect(() => {
    if (puuId) {
      handleFetchingGames(puuId);
    }
  }, [puuId]);

  // function to retrieve the users PUUID from Riot API when filling out the form with gameName and tagLine
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `http://localhost:4000/api/summoner?gameName=${gameName}&tagLine=${tagLine}`;
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPlayerData(response.data);
        const newPuuId = response.data.puuid
        setPuuId(newPuuId);
        console.log(puuId);
        // localStorage.setItem("PUUID", puuId)
      })
      .catch(function (error) {
        console.log(error);
        setPlayerData(null); // Reset playerData on error
      });

  };
  // change state when the user types their gameName
  const handleGameName = (event) => {
    setGameName(event.target.value);
  };

  // change state when the user types their tagLine
  const handleTagLine = (event) => {
    setTagLine(event.target.value);
  };

  // function that fetches the users last 10 games and returns the games' matchId in an array format
  const handleFetchingGames = async (puuId) => {

    const url = `http://localhost:4000/api/matches?puuId=${puuId}`;
    await axios
      .get(url)
      .then((response) => {
        const data = response.data
        setMatchList(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="logoContainer">
        <img src={logo} height="400px" width="700px" alt="Logo" />
      </div>

      <h3>Search for any summoner for League of Legends</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Summoner Name"
          onChange={handleGameName}
          value={gameName}
        />
        <input
          type="text"
          placeholder="Enter Tag Line"
          onChange={handleTagLine}
          value={tagLine}
        />
        <button type="submit"> Summoner </button>
      </form>

      {playerData && (
        <div className="summonerInfo">
          <p>Summoner Name: {gameName}</p>
          <p>Summoner Level: {playerData.summonerLevel}</p>
          <img
            style={{ margin: "10px" }}
            height="100"
            width="100"
            src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/${playerData.profileIconId}.png`}
            alt=""
          />
        </div>
      )}

      {!playerData && <p>Sorry, no player to show</p>}
    </>
  );
};

export default Home;
