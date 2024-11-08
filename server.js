// server.js

import express from 'express';

const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
