const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const baseUrl = '/api/v1';
app.use(bodyParser.json());

const Challenge = require('./database/models/Challenge');


app.get(`${baseUrl}/challenges`, async (req, res) => {
  try {
    const result = await Challenge.findAll();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.listen(3000, () => console.log('Server is RUNNING PORT 3000'));