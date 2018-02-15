var      config = require('./config/database');
var knex = require('knex')(config);

//var Bookshelf = require('bookshelf')(knex);

module.exports = require('bookshelf')(knex);
module.exports.knexconn=knex;