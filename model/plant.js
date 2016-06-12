var Plant = require('./model');
var fs = require('fs');

function parseDate(input) {
  if (input != undefined){
    var parts = input.split('.');
        // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1] - 1, 1); // Note: months are 0-based
  }
}

var str = "../data/part-000";
for(var i = 1; i < 30; i++){
  var f_str;
  if ( i < 10)
    f_str = str +  '0' + i;
  else f_str = str + i;
  console.log(f_str);

  fs.readFile(f_str, 'utf8', (err, data) => {
    if (err) throw err;
    //console.log(data);
    var lines = data.split('\n');
    lines.map( line => {
      var val = line.split(',');
      var name = val[0];
      var date = val[1];
      var a_price = val[2];
      var a_sold = val[3];
      var d = parseDate(date);
      //if(d!=undefined)
      //  console.log(d);
      
      if ( name != undefined && date != undefined && a_price != undefined && a_sold != undefined){
        var d = parseDate(date);
        var plant = new Plant({
          name: name,
          time: d,
          average_price: a_price,
          average_quantity: a_sold,
        });

        plant.save((err) => {
          if (err) throw err;
          console.log(name + ' ' + date + ' created');
        });
      }
    
    });
  });
}

