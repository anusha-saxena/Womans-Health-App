const express = require('express');
const app = express();
const port = 5000;

app.get('/users', (req, res) => {
  res.json({ message: 'Hello from /users endpoint' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
