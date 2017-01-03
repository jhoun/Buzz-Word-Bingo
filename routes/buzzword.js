const express = require('express');
const router = express.Router();

var words = [];

router.route('/')
  .post((req,res) => {
    words.push({buzzword: req.body.word});
    res.send(words);
  })

//these methods will be exported to buzzwords variable
module.exports = router;