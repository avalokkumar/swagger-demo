module.exports = function(flights) {
    var flight = require("../api/model/flight");
    for (var number in flights) flights[number] = flight(flights[number]);
    var functions = {};
    return functions.flight = function(req, res) {
        var number = req.param("number");
        "undefined" == typeof flights[number] ? res.status(404).json({
            status: "error"
        }) : res.json(flights[number].getInformation());
    }, functions.arrived = function(req, res) {
        var number = req.param("number");
        "undefined" == typeof flights[number] ? res.status(404).json({
            status: "error"
        }) : (flights[number].triggerArrive(), res.json({
            status: "done"
        }));
    }, functions.list = function(req, res) {
        res.json(flights)
    }, functions;
};