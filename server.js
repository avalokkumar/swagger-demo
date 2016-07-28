var http = require('http'),
	flights = require('./data/flights.js'),
    persons = require('./data/persons.js'),
	//db = require('./db'),
    port = process.env.PORT || 10010,
	app = require('./app')(flights,persons);

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port);
    console.log("try this:\ncurl http://127.0.0.1:" + port + "/hello?name=Scott")
});