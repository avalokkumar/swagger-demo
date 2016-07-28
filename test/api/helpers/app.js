var app = require('../../../app'),
	flights = require('../data/flights.js'),
	persons = require('../data/persons.js');

module.exports = app(flights, persons);