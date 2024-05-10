const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

const riotApiKey = "RGAPI-79d88b4a-b61a-4669-849e-7645cd486c6c";

app.use(express.json());
app.use(cors());

app.get('/api/summoner', async (req, res) => {
  try {
    const { gameName, tagLine } = req.query;
    const url = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${riotApiKey}`;
    const response = await axios.get(url);
    console.log(response)
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
