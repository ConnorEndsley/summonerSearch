import React, {useState, useEffect} from "react";
import { Fragment } from "react";
import logo from '../images/logo.jpg'
import axios from 'axios';

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [summonerData, setSummonerData, playerData, setPlayerData] = useState({});
  const api_key = "RGAPI-79d88b4a-b61a-4669-849e-7645cd486c6c";

  const handleChange = (event) => {
    const value = event.target.value
    setSearchText(value);
  }

  // makes API call for users summonerID and data when event is made
  const searchForSummoner = (event) => {
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${api_key}`

    // use axios to handle API call
    axios.get(url)
    .then(function(response) {
      console.log(response.data)
    }).catch(function(error){
      console.log(error)
    })
  }

  return (
<>
    <div className="logoContainer">
        <img src={logo} height="400px" width="700px" />
    </div>

    <h3>
        Search for any summoner for League of Legends
    </h3>
    <>
    <input type="text" placeholder="Enter Summoner Name" onChange={handleChange} value = {searchText}/>
    <button onClick={event => searchForSummoner(event)}>Summoner</button>
    </>
</>
  );
};

export default Home;
