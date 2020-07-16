const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => res.send('Hello from GIT-TEST-JAR'));
app.get('/about', (req, res) => res.send('Hello from the "About" page'));

app.listen(port, () =>
  console.log(`Firing up the app...listening at localhost:${port}`),
);
