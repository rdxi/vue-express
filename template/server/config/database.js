// config/database.js
module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'widget_cms',
    debug:false,
    charset: 'utf8'
  },//or...
/*	'url':"mysql://localhost/db?debug=true&unicode=true&charset=utf-8",
		options: {
			user: "user",
			pass: "pass",
			debug:true,
			server: {
				socketOptions: {
					keepAlive: 1
				}
			}
		},
	DB:url*/
};
