const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.urlencoded({
  extended:true
}));

const server = app.listen(PORT, () => {
  var port = server.address().port;
  console.log(`app listening at ${port}`);
})