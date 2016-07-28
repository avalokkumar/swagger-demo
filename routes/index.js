/* Copyright 2013 PayPal */
"use strict";
var exports = module.exports = {};
var Client = require('node-rest-client').Client;
var client = new Client();

exports.user = function(req, res){
	client.get("http://localhost:8080/greeting", function(data, response){
		console.log("Request Message : "+res.statusCode);
		console.log(data);
		//res.set('Content-Type', 'application/xml');
		res.send(data);
	});
};

exports.getPersonDetailsById = function(req, res){
	client.get("http://localhost:8080/person/11", (data, response) => {
		console.log(data);
		res.json(data);
	});
};

exports.getPersonDetails = function(req,res){
	client.get("http://localhost:8080/person", function(data, response){
		console.log(data);
		res.json(data);
	});
};