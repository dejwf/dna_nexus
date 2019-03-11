const expect = require("expect"), mocha = require("mocha"), request = require('request');

describe("Positive tests: GET /genes", function () {
    this.timeout(10 * 1000);
    it('should accept named parameters Begin and End', (done) => {
        let params = "?begin=1000000&end=1000021";

        request('http://localhost:3000/genes?' + params, (err, res, response) => {
            if (err) {
                return console.log(err);
            }
            try {
                expect(response).not.toContain("Error");
                expect(response).toContain('A');
                expect(response).toContain('C');
                expect(response).toContain('G');
                expect(response).toContain('T');
            } catch (e) {
                done(e)
            }
        });
    });

    it("should return A, C, G, T letters (genome substrings)", (done) => {
        let params = "?begin=1000002&end=1000004";

        request('http://localhost:3000/genes?' + params, (err, res, response) => {
            if (err) {
                return console.log(err);
            }
            try {
                expect(response).not.toMatch("Error");
                expect(response).toMatch('A');
                expect(response).toMatch('C');
                expect(response).toMatch('G');
                expect(response).toMatch('T');

            } catch (e) {
                done(e)
            }

        });
    });

    it("should return overlapping annotations", (done) => {
        let params = "?begin=12&end=16";


        request('http://localhost:3000/genes?' + params, (err, res, response) => {
            if (err) {
                return console.log(err);
            }
            try {

                expect(response).not.toMatch("Error");
                expect(response).toMatch('12');
                expect(response).toMatch('16');

                expect(response).toMatch('12,13');
                expect(response).toMatch('15,16');

                expect(response).toMatch('/A/');
                expect(response).toMatch('/C/');
                expect(response).toMatch('/G/');
                expect(response).toMatch('/T/');
            } catch (e) {
                done(e);
            }


        });
    });

    //positive tests goes here
});

describe("Negative Tests: GET /genes", function () {
    this.timeout(10 * 1000);
    it("should fail when the annotation range is out of bounds")
    it('should fail when called with wrong parameter datatype');
    it("should fail when called with no parameters");
    it("should fail when the annotation range contain a negative numbers");


});