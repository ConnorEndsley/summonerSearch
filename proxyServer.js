const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

const port = 4000;

app.listen(port, function(){
    console.log("Listening on localhost 4000")
})