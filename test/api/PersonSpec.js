var app = require("./helpers/app.js");

var should = require("should"), supertest = require("supertest");

describe("persons", function() {
    it("should return valid person data for personId 12", function(done) {
        supertest(app).get("/person/12").expect(200).end(function(err, res) {
            res.status.should.equal(200);
            done();
        });
    });
    it("should return an error for an invalid person id", function(done) {
        supertest(app).get("/person/99999999").expect(404).end(function(err, res) {
            res.status.should.equal(404);
            done();
        });
    });
    it("should return valid person's friends detail for personId 9", function(done) {
        supertest(app).put("/person/9/friends").expect(200).end(function(err, res) {
            res.status.should.equal(200);
            done();
        });
    });
    
    it("should return all the person details", function(done) {
        supertest(app).put("/getAllPerson").expect(200).end(function(err, res) {
            res.status.should.equal(200);
            done();
        });
    });
});