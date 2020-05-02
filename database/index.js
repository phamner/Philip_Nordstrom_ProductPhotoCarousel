var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nordstrom', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('we are connected to the database')
});


let carouselSchema = new mongoose.Schema({
  id: Number,
  itemName: String,
  type: String,
  colors: {
    //note: the first item of each array will be the round color swatch.
    //need to change color1, etc. to reflect the name of each color/material.
    color1:[String, String, String, String, String, String, String, String],
    color2:[String, String, String, String, String, String, String, String],
    color3:[String, String, String, String, String, String, String, String]
  }
  // anothertype: String
});

let Carousel = mongoose.model('Carousel', carouselSchema)

module.exports = {
  save: function() {

    let newItem = {
      id: 4,
      itemName: 'Nikeyyyyyyyy',
      type: 'shoes for yo mommyya',
      colors: {
        color1:['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
        color2:['there', 'there', 'there', 'there', 'there', 'there', 'there', 'there'],
        color3:['world', 'world', 'world', 'world', 'world', 'world', 'world', 'world']
      }
    }

    let item = new Carousel(newItem)

    item.save(function (err, item) {
      if (err){
        console.error(err);
      } else {
        console.log('SUCCESS: ', item)
      }
      // fluffy.speak();
    });



    //   // versionsAvailable: {a: 'hello', b: 'world'}
    //   //   1: ['https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_W_Wool_Runner_Kotare_GREY_ANGLE_0f3bfe63-ac7d-4106-9acf-d26f8414ac53.png?v=1571655724', 'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:f5f5f5/https://cdn.shopify.com/s/files/1/1104/4168/products/Allbirds_W_Wool_Runner_Kotare_GREY_ANGLE_0f3bfe63-ac7d-4106-9acf-d26f8414ac53.png?v=1571655724']
    //   // }
    // }

    // Carousel.insertOne(newItem)
    // .then(result => {
    //   console.log(`Successfully inserted ${result.insertedIds.length} items!`);
    //   return result
    // })
    // .catch(err => console.error(`Failed to insert documents: ${err}`))
  }
  
}


// save()


