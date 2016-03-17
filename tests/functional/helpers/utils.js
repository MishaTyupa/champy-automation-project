'use strict';

var setup = require('./setup');

module.exports.before = function (extraCaps) {
    return function (done) {
        var desired = setup.getDesiredCapabilities(extraCaps);
        this.allPassed = true;
        this.allFailed = true;
        this.driver = setup.getDriver(desired, done);
    };
};

// after each test, re-evaluate whether the whole thing passed or failed
module.exports.afterEach = function (done) {
    this.allPassed = this.allPassed && (this.currentTest.state === 'passed');
    done();
};

module.exports.afterEachFailed = function (done) {
    var snapshotNumber = Math.floor(Math.random() * 100);
    this.allFailed = this.allFailed && (this.currentTest.state === 'failed');
    if(this.currentTest.state === 'failed') {
        this.driver.saveScreenshot("snapshots/" + snapshotNumber + ".png");
    }
    done();
};

// after all the tests, quit and update Sauce (if necessary)
module.exports.after = function (done) {
    if (process.env.SAUCE) {
        this.driver
            .quit()
            .sauceJobStatus(this.allPassed)
            .nodeify(done);
    } else {
        this.driver
            .quit()
            .nodeify(done);
    }
};
