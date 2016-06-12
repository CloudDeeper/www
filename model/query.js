var Plant = require('./model');
var fs = require('fs');


Plant.aggregate([
  {
    $group: {
      _id: {
        id: '$name',
      },
      count: {
        $sum: 1
      },

    }
  },
  {
    $sort: {
      _id: 1,
    }
  }
  ], (err, plants) => {
    
    plants.map( plant => {
      if(plant.count == 53)
        console.log(plant._id.id);
     
      //console.log(plant._id.id);
      // Plant.find({name: plant._id.id}, (err, data) => {
      //   if (err) throw err;
      //   data.map(d => {
      //     d.count = plant.count;
      //     d.save((err) => {
      //       if (err) throw err;
      //       console.log(d.name + ' ' + d.count);
      //     });
      //   });
        
      // });
      
    });

    
    
});

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

