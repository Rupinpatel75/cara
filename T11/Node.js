const express = require('express');
const request = require('request');
const app = express();

app.use('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    res.status(400).send('URL parameter is missing');
    return;
  }
  req.pipe(request(url)).pipe(res);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Proxy server is running at http://localhost:${port}`);
});
