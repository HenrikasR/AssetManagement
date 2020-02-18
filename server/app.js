const express = require('express')
const app = express()
const port = 3000

// Cors
const cacheHours = 24 * 60 * 60; // 24 hours
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Max-Age', `${cacheHours}`);
  next();
});

const exampleJson = [
    {id: 1, name: 'dell', user:'Henrikas'},
    {id: 2, name: 'dell2', user:'Aloyzas'},
]

app.get('/api/getAllAssets', (req, res) => res.json(exampleJson))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))