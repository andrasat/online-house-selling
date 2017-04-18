const mongoose = require('mongoose')
const Schema = mongoose.Schema

const houseSchema = new Schema({
  title: {type: String, required: true},
  price: {type: Number, required: true},
  address: {type: String, required: true},
  description: {type: String, default: ''}.
  imgUrl: {type: String, default: ''},
  owner: {type: String, required: true},
  coordinate: {
    lon: String,
    lat: String
  }
})

const House = mongoose.model('House', houseSchema)
module.exports = House