const express = require('express');
const app = express();
const livePricing = require('./live-pricing');
const util = require('./util');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/search', async (req, res) => {
  try {
    let params = {};
    for (const key in req.query) {
      params[key] = req.query[key];
    }
    const results = await livePricing.search(params);
    res.send(util.formatResponse(results));
  } catch (err) {
    res.status(500).send(err);
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
