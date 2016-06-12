var str = "../data/part-000";
var fs = require('fs');
for(var i = 0; i < 30; i++){
  if ( i < 10)
    var a = str +  '0' + i;
  else var a = str + i;
  console.log(a);
  fs.readFile(a, 'utf8', (err, data) =>{
    if (err) throw err;
    console.log(data);
  });
}
