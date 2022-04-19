var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//1.bin:www-server root directory
//2.public:a)images,b)js,c)stylesheets
//3.routes:a)index route,b)users route they are modules describes the path
//4.views:a)error,b)index,c)layout they contain html files
//5.app.js:1) it will imports all the modules2)middlewares:a)express.json-will parse the json data