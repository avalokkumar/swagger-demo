'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var routes = require('./routes');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  
  	app.get("/user", routes.user);
	app.get("/persons/11", routes.getPersonDetailsById);
	
	app.get("/persons", routes.getPersonDetails);

  app.listen(port, (err) => {
	  console.log("Server listening to port "+port);
  });

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
