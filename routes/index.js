var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.send('node server started')
});

module.exports = router;
