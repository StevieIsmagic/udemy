const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

//API Calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hi There From Express Server.js' });
});

if (process.env.NODE_ENV === 'production') {
  //Serve any static files from the React App
  app.use(express.static(path.join(__dirname, 'client/build')));

  //Handle React Routing, return all requests to React App
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));