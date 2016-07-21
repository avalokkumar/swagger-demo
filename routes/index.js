/* Copyright 2013 PayPal */
"use strict";
var exports = module.exports = {};
var Client = require('node-rest-client').Client;
var client = new Client();

exports.user = function(req, res){
	handleError(req);
	
	client.get("http://localhost:8080/greeting", function(data, response){
		//console.log(data);
		console.log("Request Message : "+res.statusCode);
		console.log(data);
		//res.set('Content-Type', 'application/xml');
		res.send(data);
	});
};

exports.getPersonDetailsById = function(req, res){
	handleError(req);
	
	client.get("http://localhost:8080/person/11", function(data, response){
		var jsonObj = JSON.parse(data.toString());
		console.log(jsonObj);
		res.json(data);
	});
};

exports.getPersonDetails = function(req,res){
	handleError(req);
	client.get("http://localhost:8080/person", function(data, response){
		console.log(data);
		res.json(data);
	});
};

exports.handleError = function(req){
	req.on("error", function(e) {
		console.log("Error Occured... "+e);
	})
};
/*exports.getPersonDetailById = function(req, res){
	
}*/