var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;
mongoose.connect('mongodb://localhost/www');

db.on('error', console.error);
db.once('open', function() {
  console.log('db connected');
  
  
});

var plantSchema = new Schema({
  name: String,
  time: Date,
  average_price: Number,
  average_quantity: Number,
  count: Number,
  group: Number,
});

var Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
