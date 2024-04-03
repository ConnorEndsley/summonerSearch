const express = require('express');
const cors = require('cors');
const axios = require('axios');
const API_KEY = "RGAPI-79d88b4a-b61a-4669-849e-7645cd486c6c"
const app = express();

app.use(cors());

const port = 4000;

app.listen(port, function(){
    console.log("Listening on localhost 4000")
})

// function to get a players ID based on their username input

// const getPlayerPUUID = (playerName) => {
//    let puuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY}`
//     return axios.get(puuidURL)
//     .then(response => {
//         console.log(response.data);
//         return
//     }).catch(err=>err)
// }

let puuidURL = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/a%20schmelly%20goat?api_key=${API_KEY}`
axios.get(puuidURL)
.then(response => {
    let puuId = response.data.puuid
    console.log("PUUID:", puuId);
    return puuid
}).catch(err=>err)

// getPlayerPUUID("a schmelly goat");

