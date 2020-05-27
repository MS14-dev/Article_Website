var express = require('express');
var indexRouter = express.Router();
const connection=require('../connection');
var bodyParser=require('body-parser');

indexRouter.use(bodyParser.json());

/* GET home page. */
indexRouter.route('/')
.get( function(req, res) {
  res.render('index', { title: 'Express' });
})

module.exports = indexRouter;
