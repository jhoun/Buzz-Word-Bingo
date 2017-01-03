const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  var port = server.address().port;
  console.log(`app listening at ${port}`);
})