/*global describe, it, before, after, afterEach */
'use strict';

var apps = require('../helpers/apps'),
    fs = require('fs'),
    utils = require('../helpers/utils'),
    elements = require('../helpers/elements');


describe("android native", function () {
    before(utils.before({
        app: apps.androidChampy,
        browserName: '',
        name: 'Champy App',
        tags: ['champy', 'azinecllc', 'appium', 'native', 'android']
    }));

    afterEach(utils.afterEach);

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

    it('should make screenshot of login screen', function (done) {
        this.driver
            .takeScreenshot().then(function (data) {
                var base64Data = data.replace(/^data:image\/png;base64,/,"");
                fs.writeFile("snapshots/out.png", base64Data, 'base64', function (err) {
                    if (err) console.log(err);
                });
            })
            .nodeify(done);
    });

    it('should check text on login screen', function (done) {
        this.driver
            .elementByName('CHAMPY HELPS YOU IMPROVE')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });


    it('should login via Facebook', function (done) {

          var sampleEmail = 'skill.bereg@gmail.com',
             samplePassword = 'federikofellini1920';

        this.driver
            .elementById(elements.loginButton)
            .click()
            .setImplicitWaitTimeout(60000)
            .elementById(elements.fbLoginField)
            .sendKeys(sampleEmail)
            .click()
            .elementById(elements.fbPasswordField)
            .sendKeys(samplePassword)
            .elementById(elements.fbLoginButton)
            .click()
            .nodeify(done);

    });

    it('progress bar for Challenges is present on the home screen', function (done) {

        this.driver
            .elementById(elements.challengeBar)
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Challenges')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('progress bar for Wins is present on the home screen', function (done) {

        this.driver
            .elementById(elements.winsBar)
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Wins')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);

    });

    it('progress bar for Total is present on the home screen', function (done) {

        this.driver
            .elementById(elements.totalBar)
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Total')
            .should.eventually.exist
            .isDisplayed()
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

    it('Challenges label is present in the sidemenu', function (done) {

        this.driver
            .elementByClassName(elements.sidemenuButton)
            .click()
            .elementByName(elements.labelChallenges)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Friends label is present in the sidemenu', function (done) {

        this.driver
            .elementByName(elements.labelFriends)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('History label is present in the sidemenu', function (done) {

        this.driver
            .elementByName(elements.labelHistory)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Settings label is present in the sidemenu', function (done) {

        this.driver
            .elementByName(elements.labelSettings)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Share label is present in the sidemenu', function (done) {

        this.driver
            .elementByName(elements.labelShare)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Logout label is present in the sidemenu', function (done) {

        this.driver
            .elementByName(elements.labelLogout)
            .should.eventually.exist
            .isDisplayed()
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

    it('should scroll down', function (done) {

        this.driver
            .elementByName('My friend number 3')
            .flick(0, -350, 50, function (err) {
                throw new Error(err);
            })
            .nodeify(done);
    });

    //it('should check + is not present', function (done) {
    //        .nodeify(done);
    //});

    it('should scroll up', function (done) {

        this.driver
            .elementByName('My friend number 3')
            .flick(0, 350, 50, function (err) {
                throw new Error(err);
            })
            .sleep(2000)
            .nodeify(done);
    });


    it('should delete friend', function (done) {

        this.driver
            .elementByName('My friend number 5')
            .click()
            .elementById(elements.deleteFriendButton)
            .click()
            //      CHECKING IF DELETED ELEMENT EXISTS
            //     .should.not.exist
            //     .isDisplayed('My friend number 0')
            //     .execute("mobile: scroll", [{direction: 'down', element: "My friend number 7"}])
           .nodeify(done);

    });

    it('should redirect to Pending', function (done) {

        this.driver
            .elementByName(elements.pendingFriends)
            .click()
            .nodeify(done);

    });

    it('should redirect to Other', function (done) {

        this.driver
            .elementByName(elements.otherFriends)
            .click()
            .nodeify(done);

    });

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
            .isDisplayed()
            .nodeify(done);
    });

    it('Notifications label in Settings', function (done) {

        this.driver
            .elementByName(elements.labelNotifications)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Legal label in Settings', function (done) {

        this.driver
            .elementByName(elements.labelLegal)
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });


    it('Turning on Push Notifications', function (done) {

        this.driver
            .elementById(elements.switchPushNotifications)
            .click()
            .nodeify(done);
    });

    it('Turning on New Challenge Requests', function (done) {

        this.driver
            .elementById(elements.switchChallengeRequests)
            .click()
            .nodeify(done);
    });

    it('Turning on Accepted Your Challenge', function (done) {

        this.driver
            .elementById(elements.switchAcceptedYourChallenge)
            .click()
            .nodeify(done);
    });

    it('Turning on Challenge End', function (done) {

        this.driver
            .elementById(elements.switchChallengeEnd)
            .click()
            .nodeify(done);
    });

    it('Turning off Push Notifications', function (done) {

        if(this.driver.elementById(elements.switchPushNotifications).isSelected()){
        this.driver
            .elementById(elements.switchPushNotifications)
            .click()
            .nodeify(done);
        }
        else {
            console.log("Error")
                .nodeify(done);
        }
    });

    it('Turning off New Challenge Requests', function (done) {

        if(this.driver.elementById(elements.switchChallengeRequests).isSelected()){
            this.driver
                .elementById(elements.switchChallengeRequests)
                .click()
                .nodeify(done);
        }
        else {
            console.log("Error")
                .nodeify(done);
        }
    });

    it('Turning off Accepted Your Challenge', function (done) {

        if(this.driver.elementById(elements.switchAcceptedYourChallenge).isSelected()){
            this.driver
                .elementById(elements.switchAcceptedYourChallenge)
                .click()
                .nodeify(done);
        }
        else {
            console.log("Error")
                .nodeify(done);
        }
    });

    it('Turning off Challenge End', function (done) {

        if(this.driver.elementById(elements.switchChallengeEnd).isSelected()){
            this.driver
                .elementById(elements.switchChallengeEnd)
                .click()
                .nodeify(done);
        }
        else {
            console.log("Error")
                .nodeify(done);
        }
    });


    it('should logout from Champy', function (done) {

        this.driver
            .back()
            .elementByClassName(elements.sidemenuButton)
            .click()
            .elementByName(elements.labelLogout)
            .click()
            .sleep(2000)
            .nodeify(done);
    });

    it('should go to main screen after logout', function (done) {

        this.driver
            .elementById(elements.loginButton)
            .isDisplayed()
            .nodeify(done);
    });
});

