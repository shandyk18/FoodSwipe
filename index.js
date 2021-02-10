const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('dotenv/config');

app.use(cors());

// Import Routes
const restRoute = require('./routes/restaurant');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/restaurants', restRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});