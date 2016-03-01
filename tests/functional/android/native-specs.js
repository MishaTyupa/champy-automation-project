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

    it('should run the app', function (done) {
        this.driver
            .elementById('com.example.ivan.champy_v2:id/login_button')
            .isDisplayed()
            .nodeify(done);
    });

    it('should check if champy logo is present and displayed', function (done) {
        this.driver
            .elementById('com.example.ivan.champy_v2:id/Champy_image')
            .should.eventually.exist
            .isDisplayed()
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

       //var sampleEmail = 'skill.bereg@gmail.com',
       //    samplePassword = 'federikofellini1920';

        this.driver
            .elementById('com.example.ivan.champy_v2:id/login_button')
            .click()
            .setImplicitWaitTimeout(60000)
            //.elementById('com.facebook.katana:id/login_username')
            //.sendKeys(sampleEmail)
            //.click()
            //.elementById('com.facebook.katana:id/login_password')
            //.sendKeys(samplePassword)
            //.elementById('com.facebook.katana:id/login_login')
            //.click()
            .nodeify(done);

    });

    it('progress bar for Challenges is present on the home screen', function (done) {

        this.driver
            .elementById('com.example.ivan.champy_v2:id/textView2')
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Challenges')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('progress bar for Wins is present on the home screen', function (done) {

        this.driver
            .elementById('com.example.ivan.champy_v2:id/textView3')
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Wins')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);

    });

    it('progress bar for Total is present on the home screen', function (done) {

        this.driver
            .elementById('com.example.ivan.champy_v2:id/textView4')
            .should.eventually.exist
            .isDisplayed()
            .elementByName('Total')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });


    it('swiping the slider', function (done) {

        this.driver
            .flick(114,382,3000,function(err){
                new Error(err);
            })
            .nodeify(done);
    });



    it('should open and close blured window', function (done) {
        this.driver
            .elementById('com.example.ivan.champy_v2:id/imageButton')
            .click()
            .sleep(3000)
            .elementById('com.example.ivan.champy_v2:id/imageButton')
            .click()
            .nodeify(done);

    });

    it('Challenges label is present in the sidemenu', function (done) {

        this.driver
            .elementByClassName('android.widget.ImageButton')
            .click()
            .elementByName('Challenges')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Friends label is present in the sidemenu', function (done) {

        this.driver
            .elementByName('Friends')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('History label is present in the sidemenu', function (done) {

        this.driver
            .elementByName('History')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Settings label is present in the sidemenu', function (done) {

        this.driver
            .elementByName('Settings')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Share label is present in the sidemenu', function (done) {

        this.driver
            .elementByName('Share')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Logout label is present in the sidemenu', function (done) {

        this.driver
            .elementByName('Logout')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Profile picture is present in the sidemenu', function (done) {

        this.driver
            .elementById('com.example.ivan.champy_v2:id/profile_image')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('should redirect to Friends', function (done) {
        this.driver
            .elementByName('Friends')
            .click()
            .nodeify(done);

    });

    it('scroll to bottom Friend', function (done) {
        this.driver
            .flick(384,261,5000,function(err){
                new Error(err);
            })
            .setImplicitWaitTimeout(60000)
            .nodeify(done);
    });

    //it('should delete friend', function (done) {
    //
    //    this.driver
    //        .elementByName('My friend number 0')
    //        .click()
    //        .elementById('com.example.ivan.champy_v2:id/imageButton2')
    //        .click()

     //      CHECKING IF DELETED ELEMENT EXISTS
     //     .should.not.exist
     //     .isDisplayed('My friend number 0')
     //     .execute("mobile: scroll", [{direction: 'down', element: "My friend number 7"}])
    //        .nodeify(done);
    //
    //});

    it('should redirect to Pending', function (done) {

        this.driver
            .elementByName('Pending')
            .click()
            .nodeify(done);

    });

    it('should redirect to Other', function (done) {

        this.driver
            .elementByName('Other')
            .click()
            .nodeify(done);

    });

    it('should enter Settings page', function (done) {

        this.driver
            .elementByClassName('android.widget.ImageButton')
            .click()
            .elementByName('Settings')
            .click()
            .nodeify(done);

    });

    it('General label in Settings', function (done) {

        this.driver
            .elementByName('General:')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Notifications label in Settings', function (done) {

        this.driver
            .elementByName('Notifications:')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });

    it('Legal label in Settings', function (done) {

        this.driver
            .elementByName('Legal:')
            .should.eventually.exist
            .isDisplayed()
            .nodeify(done);
    });


    it('should logout from Champy', function (done) {

        this.driver
            .back()
            .elementByAccessibilityId('Open navigation drawer')
            .click()
            .elementByName('Logout')
            .click()
            .sleep(2000)
            .nodeify(done);
    });

    it('should go to main screen after logout', function (done) {

        this.driver
            .elementById('com.example.ivan.champy_v2:id/login_button')
            .isDisplayed()
            .nodeify(done);
    });
});

