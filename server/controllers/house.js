const House = require('../models/house')

module.exports = {

  addHouse: (req,res)=> {
    new House({
        title: req.body.title,
        price: req.body.price,
        address: req.body.address,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
        owner: req.body.owner,
        coordinate : {
          lon: req.body.lon,
          lat: req.body.lat
        }
    }).save((err, house)=> {
      if(err) {
        res.status(400).send(err)
      } else {
        res.send(house)
      }
    })
  },
  getHouse: (req, res)=> {
    House.find({}, (err, houses)=> {
      if(err) {
        res.status(400).send(err)
      } else {
        res.send(houses)
      }
    })
  },
  updateHouse: (req,res)=> {
    House.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      price: req.body.price,
      address: req.body.address,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
      owner: req.body.owner,
      coordinate : {
        lon: req.body.lon,
        lat: req.body.lat
      }
    }, {new: true}, (err, house)=> {
      if(err) {
        console.log('update failed')
        res.status(400).send(err)
      } else {
        console.log('update success')
        res.send(house)
      }
    })
  },
  deleteHouse: (req,res)=> {
    House.findByIdAndRemove(req.params.id, (err, house)=> {
      if(err) {
        console.log(err)
        res.status(400).send(err)
      } else {
        console.log('success')
        res.send(house)
      }
    })
  }

}