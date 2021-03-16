var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }, //not object but is string



});

module.exports = mongoose.model('category', CategorySchema);
