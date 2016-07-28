"use strict";

module.exports = function(flights, persons) {
    var SwaggerExpress = require("swagger-express-mw"), errorHandler = require("express-error-handler"), 
    app = require("express")(), routes = require("./routes/index.js"), express = require("express"), cors = require("cors"),
    flightRoute = require('./routes/flightRoute.js')(flights), personRoute = require('./routes/personRoute.js')(persons),
    favicon = require('favicon'), logger = require('express-logger'), bodyParser = require('body-parser'),
    path = require("path"), swagger = require("swagger-node-express"), subpath = require("express");
    var config = {
        appRoot: __dirname
    };
    swagger.configureSwaggerPaths("", "/api-docs", ""), 
    app.use(logger({path: "./logs/logfile.txt"})), app.use(express.static(path.join(__dirname, "dist"))),
    app.use(bodyParser.json()), app.use(function (req, res, next) {
		res.set('X-Powered-By', 'Flight Tracker');
		next();
	}), app.use(bodyParser.json()), app.use(bodyParser.urlencoded({
        extended: !0
    })), app.use("/v1", subpath), app.use(cors()), 
    SwaggerExpress.create(config, function(e, res) {
        if (e) throw e;
        res.register(app);
        app.get("/", function(e, res) {
            res.sendFile(__dirname + "/dist/index.html");
        }), app.get("/user", routes.user), app.get("/persons/11", routes.getPersonDetailsById), 
        app.get("/persons", routes.getPersonDetails),app.get("/persons", routes.getPersonDetails),
        app.get('/flight/:number', flightRoute.flight), app.put('/flight/:number/arrived', flightRoute.arrived),
    	app.get('/list', flightRoute.list), app.get('/person/:personId', personRoute.getPersonDetails),
        app.get('/getAllPerson', personRoute.getAllPersonDetails), app.get('/person/:personId/friends', personRoute.getFriendsInfo);
        res.runner.swagger.paths["/hello"];
    });
    return app;
};