var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
      type: String,
      unique: true,
      required: true
    }, //not object but is string

    address: {
      type: String 
    }, //address is string

    // address: { 
    //   state: String
    // } // address is object type have state field

    // address: { 
    //   state: {
    //    type: String,
    //    required:
    // }
    // } // address is object type have state field

    type: {
      type: String
    },

    // posts: [
    //   {ref: 'posts', type: Schema.Types.ObjectId}
    // ] // not good because need to pull data too much
});

module.exports = mongoose.model('user', UserSchema);
