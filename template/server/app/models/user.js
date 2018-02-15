// app/models/user.js
// load the things we need


var Bookshelf = require('../../lbookshelfjs');
var bcrypt   = require('bcrypt-nodejs');// User model
var User = Bookshelf.Model.extend({
  tableName: 'users',
  generateHash : function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  },
  // checking if password is valid
  validPassword : function(password) {
    return bcrypt.compareSync(password,this.toJSON().password);
  }

});
var Users = Bookshelf.Collection.extend({
  model: User
});

//

module.export=User;

// create the model for users and expose it to our app
 module.exports.User=User;
module.exports.Users=Users;
