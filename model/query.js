var Plant = require('./model');
var fs = require('fs');
var path = require('path');

// Plant.aggregate([
//   {
//     $group: {
//       _id: {
//         id: '$name',
//       },
//       count: {
//         $sum: 1
//       },

//     }
//   },
//   {
//     $sort: {
//       _id: 1,
//     }
//   }
//   ], (err, plants) => {
    
//     plants.map( plant => {
//       if(plant.count == 53)
//         console.log(plant._id.id);
     
//       //console.log(plant._id.id);
//       // Plant.find({name: plant._id.id}, (err, data) => {
//       //   if (err) throw err;
//       //   data.map(d => {
//       //     d.count = plant.count;
//       //     d.save((err) => {
//       //       if (err) throw err;
//       //       console.log(d.name + ' ' + d.count);
//       //     });
//       //   });
        
//       // });
      
//     });
fs.readFile(path.join(__dirname, '../../best_clustering_result.csv'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
  var lines = data.split('\n');
  lines.map(function(line){
    var val = line.split(',');
    var name = val[0];
    var group = val[1];
    Plant.find({name: name}, (err, plants) => {
      plants.map(plant => {
        plant.group = group;
        plant.save(err => {
          if (err) throw err;
          console.log(plant.name + ' ' + group);
        });
      });
    });
    
  });
});
    
    
// });

// Plant.find({name: 'OT多娜托-雙朵'}, function(err, plants) {
//   if (err) throw err;
//   plants.map(plant => {
//     console.log(plant);
//   });
// });
  
  
// });

/*
Plant.remove({}, function(err){
    if (err) throw err;
});
*/

