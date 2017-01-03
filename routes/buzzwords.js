const express = require('express');
const buzzwords = express.Router();




buzzwords.route('/')
  .post((req,res) => {
    res.json({buzzwords: []});
  })

//these methods will be exported to buzzwords variable
module.exports = buzzwords;