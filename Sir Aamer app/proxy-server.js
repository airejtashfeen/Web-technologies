const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', async (req, res) => {
  try {
    const { apikey, username, password } = req.query;
    const url = `https://securepayments.live/secure/api/check-access/by-login-pass?_key=${apikey}&login=${username}&pass=${password}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
