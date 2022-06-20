const mongoose = require('mongoose')
const Schema = mongoose.Schema


const FavoritesSchema = new Schema({ 
  title: String,
  nasa_id: String,
  date_created: String,
  description: String,
  href:String,
  isFavorites:false
})


const Favorites = mongoose.model("Favorites", FavoritesSchema)
module.exports = Favorites