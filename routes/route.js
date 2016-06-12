var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Plant = require('../model/model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({hi:hi});
});

router.get('/api', function(req, res) {
  Plant.find({count: 53}, (err, plant) => {
    res.json(plant);
  });
  
});

module.exports = router;