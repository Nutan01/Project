import { POCAdmin } from './admin.po';
import { browser, by, element,$ } from 'protractor';
describe('poc App', () => {
  let page: POCAdmin;

  beforeEach(() => {
    page = new POCAdmin();
  });

 var originalTimeout;

    // beforeEach(function() {
    //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // });

    // afterEach(function() {
    //   jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    // });

//   it('should add challenge', () => {
// //page.navigateTo();
//     expect(page.addChallenge()).toEqual('Name');
//      // expect(page.wait());

//   });

//    it('should set dfb', () => {
//       page.navigateTo();
//     expect(page.setUserNameText()).toEqual('sdvdfv');
//   });

//    it('should set hb', () => {
//      //page.navigateTo();
//     expect(page.setPasswordText()).toEqual('fvdfv');
//   });

  //   it('should set Himanshi', () => {
  //    // page.navigateTo();
  //   expect(page.setAdminName()).toEqual('Himanshi');
  // });



});
// /**
//  * @name waitForUrlToChangeTo
//  * @description Wait until the URL changes to match a provided regex
//  * @param {RegExp} urlRegex wait until the URL changes to match this regex
//  * @returns {!webdriver.promise.Promise} Promise
//  */
// function waitForUrlToChangeTo(urlRegex) {
//     var currentUrl;

//     return browser.getCurrentUrl().then(function storeCurrentUrl(url) {
//             currentUrl = url;
//         }
//     ).then(function waitForUrlToChangeTo() {
//             return browser.wait(function waitForUrlToChangeTo() {
//                 return browser.getCurrentUrl().then(function compareCurrentUrl(url) {
//                     return urlRegex.test(url);
//                 });
//             });
//         }
//     );
// }
 
//      var newpage = new RegExp('welcome', 'i');

// waitForUrlToChangeTo(newpage).then(function () {
//         expect(browser.element(by.binding('currentUser.name')).getText()).toEqual('Himanshi!');
// });