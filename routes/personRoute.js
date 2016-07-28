module.exports = function(persons) {
    var person = require("../api/model/person"), functions = {}, mailInfo = {
        from: '"Alok Vishwakarma 👥" <avalokkumar@gmail.com>',
        to: "claymonstre@gmail.com",
        subject: "Hello ✔",
        text: "Hello world 🐴",
        html: "<b>Hello world 🐴</b>"
    }, mailSender = require("../api/utilities/emailsender.js")(mailInfo);
    for (var number in persons) persons[number] = person(persons[number]);
    functions.getPersonDetails = function(req, res) {
        var personId = req.param("personId");
        console.log("persons[personID] :: "+persons["person" + personId]);
        "undefined" === persons["person" + personId] ? res.status(404).json({
            status: "error"
        }) : (console.log("has own property : " + persons["person" + personId].hasOwnProperty("getPersonDetails")), 
        console.log("Person Details : %j ", persons["person" + personId].getPersonDetails()), 
        res.json(persons["person" + personId].getPersonDetails()));
    }, 
    functions.getFriendsInfo = function(req, res) {
        var personId = req.param("personId");
        "undefined" === persons["person" + personId] ? res.status(404).json({
            status: "error"
        }) : (console.log("has own property : " + persons["person" + personId].hasOwnProperty("getFriendsDetail")), 
        console.log("Friends Details : %j ", persons["person" + personId].getFriendsDetail()), 
        res.json(persons["person" + personId].getFriendsDetail()));
    }, /*functions.sendEmail = function(req, res) {
        mailSender.sendEmail(), res.json({
            status: "done"
        });
    }, */functions.getAllPersonDetails = function(req, res) {
        res.json(persons);
    };
    return functions;
};