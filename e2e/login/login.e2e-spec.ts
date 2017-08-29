import { POCLoginPage } from './login.po';
import { browser, by, element,$ } from 'protractor';
import {Challenges} from '../faceChallenge';
import {Coor2} from '../fakeCoordinatorChalleng_2';

describe('poc LoginApp', () => {
  let page: POCLoginPage;
var loginURL="http://localhost:49159/login";
var adminURL="http://localhost:49159/admin";
var memberURL="http://localhost:49159/member";
var coordinatorURL="http://localhost:49159/challengeCoordinator";

  beforeEach(() => {
    page = new POCLoginPage();
  });

//===============================================================admin =================================================

//login

it('should accept a valid email address and password ,add challenges andlogout admin', function() {
  page.navigateTo();
        //  expect(page.adminLogin()).not.toEqual(loginURL);
         expect(page.adminLogin()).toEqual(adminURL);
         expect(page.addChallenge()).toBeTruthy();
         expect(page.getLogoutA()).toBeTruthy();
       
  });

  //===============================================================member =================================================

// login

it('should accept a valid email address and password ,MemberChallenges and logout member', function() {
  page.navigateTo();
         expect(page.memberLogin()).toEqual(memberURL);
          for (var i = 0; i < Challenges.length; ++i)
            {
              expect(page.getChallengeName().get(i).getText()).toEqual(Challenges[i].challengeName.valueOf());
              expect(page.getStartDate().get(i).getText()).toEqual(Challenges[i].startdate.valueOf());
              expect(page.getEndDate().get(i).getText()).toEqual(Challenges[i].endDate.valueOf());
              expect(page.getDescription().get(i).getText()).toEqual(Challenges[i].description.valueOf());
            }
        expect(page.getLogoutM()).toBeTruthy();
  });

  //===============================================================coordinator =================================================

// login

it('should accept a valid email address and password ,CoordinatorChallenges and logout coordinator', function() {
  page.navigateTo();
         expect(page.coordinatorLogin()).toEqual(coordinatorURL);
          for (var i = 0; i < Coor2.length; ++i)
            {
              expect(page.getChallengeNameC().get(i).getText()).toEqual(Coor2[i].challengeName.valueOf());
              expect(page.getStartDateC().get(i).getText()).toEqual(Coor2[i].startdate.valueOf());
              expect(page.getEndDateC().get(i).getText()).toEqual(Coor2[i].endDate.valueOf());
              expect(page.getDescriptionC().get(i).getText()).toEqual(Coor2[i].description.valueOf());
            }
        expect(page.getLogoutC()).toBeTruthy();
  });

}); 




















 // page.navigateToAdmin();
         //expect($('[*ngIf=showingLogin]').isDisplayed()).toBeFalsy();
//         expect($('[*ngIf=!showingLogin]').isDisplayed()).toBeFalsy();


//Admin add challenge

  // it('should add challenges', function() {
  //        expect(page.addChallenge()).toBeTruthy();
  // });

//logout

//  it('should logout admin', function() {
//          expect(page.getLogoutA()).toBeTruthy();
//   });


// //MemberChallenges

//  it('should get ChallengeName', function() {
//         for (var i = 0; i < Challenges.length; ++i) {
//   expect(page.getChallengeName().get(i).getText()).toEqual(Challenges[i].challengeName.valueOf());
// }
//   });
//    it('should get StartDate', function() {
//         for (var i = 0; i < Challenges.length; ++i) {
//   expect(page.getStartDate().get(i).getText()).toEqual(Challenges[i].startdate.valueOf());
// }
//   });

//  it('should get end date', function() {
//         for (var i = 0; i < Challenges.length; ++i) {
//   expect(page.getEndDate().get(i).getText()).toEqual(Challenges[i].endDate.valueOf());
// }
//   });

//  it('should get description', function() {
//         for (var i = 0; i < Challenges.length; ++i) {
//   expect(page.getDescription().get(i).getText()).toEqual(Challenges[i].description.valueOf());
// }
//   });

//   //logout

//  it('should logout member', function() {
//          expect(page.getLogoutM()).toBeTruthy();
//   });


// //Coordinator Challenge

//  it('should get ChallengeName', function() {
//         for (var i = 0; i < Coor2.length; ++i) {
//   expect(page.getChallengeNameC().get(i).getText()).toEqual(Coor2[i].challengeName.valueOf()); 
// }
//   });
//    it('should get StartDate', function() {
//         for (var i = 0; i < Coor2.length; ++i) {
//   expect(page.getStartDateC().get(i).getText()).toEqual(Coor2[i].startdate.valueOf()); 
// }
//   });

//  it('should get end date', function() {
//         for (var i = 0; i < Coor2.length; ++i) {
//   expect(page.getEndDateC().get(i).getText()).toEqual(Coor2[i].endDate.valueOf()); 
// }
//   });

//  it('should get description', function() {
//         for (var i = 0; i < Coor2.length; ++i) {
//   expect(page.getDescriptionC().get(i).getText()).toEqual(Coor2[i].description.valueOf());
// }
//   });

// //logout

//  it('should logout coordinator', function() {
//          expect(page.getLogoutC()).toBeTruthy();
//   });















  // it('should get login user name', () => {
  //   //page.navigateTo();
  //    browser.ignoreSynchronization = true;
  //    expect(page.getUserNameText()).toEqual('Admin001');
  // });

  //  it('should get login password', () => {
  //   //page.navigateTo();
  //   expect(page.getPasswordText()).toEqual('@123');
  // });

  //  it('should click login button', () => {
  //        expect(page.clickLoginButton()).toBeTruthy();
  //         //page.navigateTo();
  // });


// it('should successfully autheticate a user when the crediantials match', function() {
 
//         var email = element(by.model('username'));
//     var password = element(by.model('password'));
//     email.sendKeys('Admin001');
//     password.sendKeys('@123');
//      var logoutButtonExists = by.id('logoutButton');  
//      browser.driver.wait(function() {
//             return browser.driver.isElementPresent(logoutButtonExists); 
//         }, 5000);
//          browser.waitForAngular();
//       element(by.css('.btn')).click();

//         expect(browser.$('[*ngIf=showingLogin]').isDisplayed()).toBeTruthy();
//         expect($('[*ngIf=!showingLogin]').isDisplayed()).toBeFalsy();
//     });


 