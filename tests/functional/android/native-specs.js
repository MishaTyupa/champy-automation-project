/*global describe, it, before, after, afterEach */
'use strict';

var apps = require('../helpers/apps'),
    utils = require('../helpers/utils');


describe("android native", function () {
    before(utils.before({
        app: apps.androidChampy,
        browserName: '',
        name: 'Champy App',
        tags: ['champy', 'azinecllc', 'appium', 'native', 'android']
    }));

    afterEach(utils.afterEach);

    after(utils.after);

    /*

    it('should login via Facebook', function (done) {

        var sampleEmail = 'skill.bereg@gmail.com',
            samplePassword = '';

        this.driver
            .elementById('com.example.ivan.champy_v2:id/login_button')
            .click()
            .setImplicitWaitTimeout(60000)
            .elementById('com.facebook.katana:id/login_username')
            .sendKeys(sampleEmail)
            .click()
            .elementById('com.facebook.katana:id/login_password')
            .sendKeys(samplePassword)
            .elementById('com.facebook.katana:id/login_login')
            .click()
            .nodeify(done);

    });
    */

    it('should redirect to Friends', function (done) {

        this.driver
            .elementById('com.example.ivan.champy_v2:id/login_button')
            .click()
            .sleep(8000)
            .elementByClassName('android.widget.ImageButton')
            .click()
            .elementByName('Friends')
            .click()

            .setImplicitWaitTimeout(5000)
            .nodeify(done);

    });

    it('should redirect to Pending', function (done) {

        this.driver
            .elementByName('Pending')
            .click()
      //      .scrollTo("My friend number 19")
      //      .setImplicitWaitTimeout(5000)
            .nodeify(done);

    });

    it('should redirect to Other', function (done) {

        this.driver
            .elementByName('Other')
            .click()
     //       .scrollTo("My friend number 19")
     //      .setImplicitWaitTimeout(5000)
            .nodeify(done);

    });

    it('should logout from Champy', function (done) {

        this.driver
            .elementByAccessibilityId('Open navigation drawer')
            .click()
            .elementByName('Logout')
            .click()
            .sleep(2000)
            .nodeify(done);

    })
});