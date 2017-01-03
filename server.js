const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buzzwords = require('./routes/buzzwords');
const buzzword = require('./routes/buzzword');
const PORT = 8080;

app.use(bodyParser.urlencoded({
  extended:true
}));

//anything that happens with buzzword module will come here
app.use('/buzzwords', buzzwords);


app.use('/buzzword', buzzword);

const server = app.listen(PORT, () => {
  var port = server.address().port;
  console.log(`app listening at ${port}`);
})