const expect = require("expect"), mocha = require("mocha"), request = require('request');
let presistTheResult = function (measurement, time0, time1, timeDiff){
    //impl pending, the function would not
};


describe("Performance measurement", function () {
    this.timeout(30 * 1000); //mocha timeout

    it('how long does it take to make a call for an annotation pair', (done) => {
        let params = "?begin=1&end=2";
        let ts0 = Date.now();

        request('http://localhost:3000/genes?' + params, (err, res, response) => {
            let ts1 = Date.now();
            let timeDiff = ts1 - ts0;
            console.log(timeDiff / 1000, "the amount of seconds it took to make the call");
            if (err) {
                return console.log(err);
            }

            persistTheResults("minimum_annotations", ts0, ts1, timeDiff)
        });
    });

    it('how long does it take to make a call for maximum annotation output', (done) => {
        let maxEnd = 4 * 1000 * 1000 * 1000; //https://en.wikipedia.org/wiki/Billion
        let params = "?begin=1&end=" + maxEnd;
        let ts0 = Date.now();
        request('http://localhost:3000/genes?' + params, (err, res, response) => {
            let ts1 = Date.now();
            let timeDiff = ts1 - ts0;
            console.log(timeDiff / 1000, "the amount of seconds it took to make the call");
            if (err) {
                return console.log(err);
            }

            persistTheResults("maximum_annotations", ts0, ts1, timeDiff)
        });
    });

    it("how long does it take to make N calls on a pair of annotations");
    it("how long does it take to make N calls on a typical annotations length");
    it("how long does it take to make N calls on a maximum annotations length");
});
