/*global describe, it, before, after, afterEach */
'use strict';

var apps = require('../helpers/apps'),
    fs = require('fs'),
    wd = require("wd"),
    utils = require('../helpers/utils'),
    Q = require('q'),
    actions = require('../helpers/actions'),
    elements = require('../helpers/elements');

wd.addPromiseChainMethod('swipe', actions.swipe);

describe("android native", function () {
    before(utils.before({
        app: apps.androidChampy,
        browserName: '',
        name: 'Champy App',
        tags: ['champy', 'azinecllc', 'appium', 'native', 'android']
    }));

    afterEach(utils.afterEach);
    afterEach(utils.afterEachFailed);
    after(utils.after);

    it('should run the app', function (done) {
        this.driver
            .elementById(elements.loginButton)
            .isDisplayed()
            .nodeify(done);
    });

    it('should check if champy logo is present', function (done) {
        this.driver
            .elementById(elements.champyLogo)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('should check text on login screen', function (done) {
        this.driver
            .elementByName('CHAMPY HELPS YOU IMPROVE')
            .should.eventually.exist
            .text().should.become('CHAMPY HELPS YOU IMPROVE')
            .nodeify(done);
    });


    it('should login via Facebook', function (done) {
        this.driver
            .elementById(elements.loginButton)
            .click()
            .setImplicitWaitTimeout(5000)
            //.elementById(elements.fbEmailField)
            //.sendKeys(elements.fbEmail)
            //.click()
            //.elementById(elements.fbPasswordField)
            //.sendKeys(elements.fbPassword)
            //.elementById(elements.fbLoginButton)
            //.click()
            .nodeify(done);
    });

    it('progress bar for Challenges is present on the home screen', function (done) {
        this.driver
            .elementById(elements.challengeBar)
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Challenges')
            .should.eventually.exist
            .text().should.become('Challenges')
            .nodeify(done);
    });

    it('progress bar for Wins is present on the home screen', function (done) {
        this.driver
            .elementById(elements.winsBar)
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Wins')
            .should.eventually.exist
            .text().should.become('Wins')
            .nodeify(done);
    });

    it('progress bar for Total is present on the home screen', function (done) {
        this.driver
            .elementById(elements.totalBar)
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Total')
            .should.eventually.exist
            .text().should.become('Total')
            .nodeify(done);
    });

    it('swiping slider to the right', function (done) {
        this.driver
            .elementById(elements.sliderCard)
            .flick(200, 0, 50, function (err) {
                throw new Error(err);
            })
            .nodeify(done);
    });

    it('swiping slider to the left', function (done) {
        this.driver
            .elementById(elements.sliderCard)
            .flick(-272, 0, 50, function (err) {
                throw new Error(err);
            })
            .nodeify(done);
    });

    it('should open and close blured window', function (done) {
        this.driver
            .elementById(elements.plusButton)
            .click()
            .sleep(3000)
            .elementById(elements.plusButton)
            .click()
            .nodeify(done);
    });

    it('should open sidemenu', function (done) {
        this.driver
            .elementByClassName(elements.sidemenuButton)
            .click()
            .nodeify(done);
    });

    it('Challenges label is present in the sidemenu', function (done) {
        this.driver
            .elementByName(elements.labelChallenges)
            .should.eventually.exist
            .text().should.become('Challenges')
            .nodeify(done);
    });

    it('Friends label is present in the sidemenu', function (done) {
        this.driver
            .elementByName(elements.labelFriends)
            .should.eventually.exist
            .text().should.become('Friends')
            .nodeify(done);
    });

    it('History label is present in the sidemenu', function (done) {
        this.driver
            .elementByName(elements.labelHistory)
            .should.eventually.exist
            .text().should.become('History')
            .nodeify(done);
    });

    it('Settings label is present in the sidemenu', function (done) {
        this.driver
            .elementByName(elements.labelSettings)
            .text().should.become('Settings')
            .nodeify(done);
    });

    it('Share label is present in the sidemenu', function (done) {
        this.driver
            .elementByName(elements.labelShare)
            .should.eventually.exist
            .text().should.become('Share')
            .nodeify(done);
    });

    it('Logout label is present in the sidemenu', function (done) {
        this.driver
            .elementByName(elements.labelLogout)
            .should.eventually.exist
            .text().should.become('Logout')
            .nodeify(done);
    });

    it('Profile picture is present in the sidemenu', function (done) {
        this.driver
            .elementById(elements.profileImage)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('should redirect to Friends', function (done) {
        this.driver
            .elementByName(elements.labelFriends)
            .click()
            .nodeify(done);
    });

    it('should open and close blured window in Friends', function (done) {
        this.driver
            .elementById(elements.plusButton)
            .click()
            .sleep(3000)
            .elementById(elements.plusButton)
            .click()
            .nodeify(done);
    });

    //it('should scroll down', function (done) {
    //this.driver
    //.elementByName('My friend number 3')
    //.flick(0, -350, 50, function (err) {
    //throw new Error(err);
    //})
    //.nodeify(done);
    //});

    //it('should scroll up', function (done) {
    //this.driver
    //.elementByName('My friend number 6')
    //.flick(0, 350, 50, function (err) {
    //throw new Error(err);
    //})
    //.sleep(2000)
    //.nodeify(done);
    //});
    //
    //it('should delete friend', function (done) {
    //this.driver
    //.elementByName('My friend number 3')
    //.click()
    //.elementById(elements.deleteFriendButton)
    //.click()
    //.nodeify(done);
    //});

    it('should redirect to Pending', function (done) {
        this.driver
            .elementByName(elements.pendingFriends)
            .click()
            .nodeify(done);
    });

    //it('should scroll down', function (done) {
    //this.driver
    //.elementByName('My friend number 3')
    //.flick(0, -350, 50, function (err) {
    //throw new Error(err);
    //})
    //.nodeify(done);
    //});
    //
    //it('should scroll up', function (done) {
    //this.driver
    //.elementByName('My friend number 6')
    //.flick(0, 350, 50, function (err) {
    //throw new Error(err);
    //})
    //.sleep(2000)
    //.nodeify(done);
    //});
    //
    //it('should delete friend from Pending', function (done) {
    //this.driver
    //.elementByName('My friend number 3')
    //.click()
    //.elementById(elements.deleteFriendButton)
    //.click()
    //.nodeify(done);
    //});

    it('should redirect to Other', function (done) {
        this.driver
            .elementByName(elements.otherFriends)
            .click()
            .nodeify(done);
    });

    //it('should scroll down', function (done) {
    //    this.driver
    //
    //.nodeify(done);
    //});




    //
    //it('should scroll up', function (done) {
    //this.driver
    //.elementByName('My friend number 6')
    //.flick(0, 350, 50, function (err) {
    //throw new Error(err);
    //})
    //.sleep(2000)
    //.nodeify(done);
    //});
    //
    //it('should delete friend from Other', function (done) {
    //this.driver
    //.elementByName('My friend number 3')
    //.click()
    //.elementById(elements.deleteFriendButton)
    //.click()
    //.nodeify(done);
    //});

    it('should enter Settings page', function (done) {
        this.driver
            .elementByClassName(elements.sidemenuButton)
            .click()
            .elementByName(elements.labelSettings)
            .click()
            .nodeify(done);
    });

    it('General label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelGeneral)
            .should.eventually.exist
            .text().should.become('General:')
            .nodeify(done);
    });

    it('Name label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelName)
            .should.eventually.exist
            .text().should.become('Name')
            .nodeify(done);
    });

    it('Avatar label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelAvatar)
            .should.eventually.exist
            .text().should.become('Avatar')
            .nodeify(done);
    });

    it('Delete Account label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelDeleteAccount)
            .should.eventually.exist
            .text().should.become('Delete Account')
            .nodeify(done);
    });

    it('Notifications label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelNotifications)
            .should.eventually.exist
            .text().should.become('Notifications:')
            .nodeify(done);
    });

    it('should open Avatar page', function (done) {
        this.driver
            .elementById('com.example.ivan.champy_v2:id/avatar')
            .click()
            .nodeify(done);
    });

    it('should open camera', function (done) {
        this.driver
            .elementById('com.example.ivan.champy_v2:id/camera')
            .click()
            .nodeify(done);
    });

    it('should take photo from camera', function (done) {
        this.driver
            .elementById('com.lenovo.scg:id/shutter_button')
            .sleep(2500)
            .click()
            .nodeify(done);
    });

    it('should save photo from camera', function (done) {
        this.driver
            .elementById('com.lenovo.scg:id/save')
            .click()
            .nodeify(done);
    });

    it('should go to Settings', function (done) {
        this.driver
            .elementByClassName(elements.sidemenuButton)
            .click()
            .elementByName(elements.labelSettings)
            .click()
            .nodeify(done);
    });

    it('should change Name', function (done) {
        var testName = 'test test';
        this.driver
            .elementByName(elements.labelName)
            .click()
            .elementById(elements.newNameField)
            .sendKeys(testName)
            .elementById(elements.applyName)
            .click()
            .elementById(elements.profileName)
            .text().should.become(testName)
            .nodeify(done);
    });

    it('Switch Push Notifications', function (done) {
        this.driver
            .elementById(elements.switchPushNotifications)
            .click()
            .nodeify(done);
    });

    it('Switch New Challenge Requests', function (done) {
        this.driver
            .elementById(elements.switchChallengeRequests)
            .click()
            .nodeify(done);
    });

    it('Switch Accepted Your Challenge', function (done) {
        this.driver
            .elementById(elements.switchAcceptedYourChallenge)
            .click()
            .nodeify(done);
    });

    it('Switch Challenge End', function (done) {
        this.driver
            .elementById(elements.switchChallengeEnd)
            .click()
            .nodeify(done);
    });

    it('Switch Push Notifications', function (done) {
        this.driver
            .elementById(elements.switchPushNotifications)
            .click()
            .nodeify(done);
    });

    it('Switch New Challenge Requests', function (done) {
        this.driver
            .elementById(elements.switchChallengeRequests)
            .click()
            .nodeify(done);
    });

    it('Switch Accepted Your Challenge', function (done) {
        this.driver
            .elementById(elements.switchAcceptedYourChallenge)
            .click()
            .nodeify(done);
    });

    it('Switch Challenge End', function (done) {
        this.driver
            .elementById(elements.switchChallengeEnd)
            .click()
            .nodeify(done);
    });

    it('should scroll down in Settings', function (done) {
        this.driver
            .elementById(elements.switchPushNotifications)
            .flick(0, -300, 50, function (err) {
                throw new Error(err);
            })
            .sleep(3000)
            .nodeify(done);
    });

    it('Legal label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelLegal)
            .should.eventually.exist
            .text().should.become('Legal:')
            .nodeify(done);
    });

    it('About label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelAbout)
            .should.eventually.exist
            .text().should.become('About')
            .nodeify(done);
    });

    it('Privacy Policy label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelPrivacyPolicy)
            .should.eventually.exist
            .text().should.become('Privacy Policy')
            .nodeify(done);
    });

    it('Terms label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelTerms)
            .should.eventually.exist
            .text().should.become('Terms')
            .nodeify(done);
    });

    it('Contact us label in Settings', function (done) {
        this.driver
            .elementByName(elements.labelContactUs)
            .should.eventually.exist
            .text().should.become('Contact Us')
            .nodeify(done);
    });

    it('should open Privacy Policy', function (done) {
        this.driver
            .elementByName(elements.labelPrivacyPolicy)
            .click()
            .nodeify(done);
    });

    //   it('should scroll down in Privacy Policy', function (done) {
    //    this.driver
    //        .elementById(elements.textPrivacyPolicy)
    //      .then(function (els) {
    //       return Q.all([
    //       els[7].getLocation(),
    //       els[3].getLocation()
    //       ]).then(function (locs) {
    //        console.log('locs -->', locs);
    //        return driver.swipe({
    //         startX: locs[0].x, startY: locs[0].y,
    //         endX: locs[1].x, endY: locs[1].y,
    //         duration: 800
    // });
    //});
    //    });
    //   .nodeify(done);
    //   });

    it('should open Terms', function (done) {
        this.driver
            .back()
            .elementByName(elements.labelTerms)
            .click()
            .nodeify(done);
    });

    it('should open Contact us', function (done) {
        this.driver
            .back()
            .elementByName(elements.labelContactUs)
            .click()
            .nodeify(done);
    });

    it('should return to Main screen', function (done) {

        this.driver
            .elementByClassName(elements.sidemenuButton)
            .click()
            .elementByName(elements.labelChallenges)
            .click()
            .sleep(2000)
            .nodeify(done);
    });

    it('should logout from app', function (done) {
        this.driver
            .elementByClassName(elements.sidemenuButton)
            .click()
            .elementByName(elements.labelLogout)
            .click()
            .sleep(2000)
            .nodeify(done);
    });

    it('should go to login screen after logout', function (done) {
        this.driver
            .elementById(elements.loginButton)
            .isDisplayed()
            .nodeify(done);
    });
});

