var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Plant = require('../model/model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../view/index.html'));
});

router.get('/api', function(req, res) {
  Plant.find({count: 53}, (err, plant) => {
    res.json(plant);
  });
  
});

router.get('/api/:name', function(req, res) {
  console.log('request ' + req.params.name);
  Plant.find({name: req.params.name}, (err, plant) => {
    res.json(plant);
  });
  
});

router.get('/group/:group', function(req, res) {
  console.log('group ' + req.params.group);
  Plant.find({group: req.params.group}, (err, plant) => {
    res.json(plant);
  });
});

module.exports = router;