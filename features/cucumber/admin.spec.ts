import { POCLoginAdminPage } from './admin.po';
import { browser, by, element} from 'protractor';
// import {Challenges} from '../fakeChallenge';
// import {Coor2} from '../fakeCoordinatorChallenge';
import { protractor } from 'protractor';

module.exports = function loginPage() {
            //this.setDefaultTimeout(60000);
            let page=new POCLoginAdminPage();
            // var adminPage = require('./login.po.js');
        
            var chai = require('chai');
            var chaiAsPromised = require('chai-as-promised');
            chai.use(chaiAsPromised);
            var expect = chai.expect;  

            this.Given(/^.*that I am on (.*)$/, ( arg) => {
            browser.get('http://localhost:49159/login');
            var loginUrl=page.getUrl();
            expect(loginUrl).to.eventually.equal(arg);
                
            });


            this.When(/^I fill in (.*) and (.*) with (.*) and (.*)$/, (arg1, arg2,arg3,arg4) => {
            // var email = element(by.id('username'));
            // email.sendKeys(arg3);
            // var password = element(by.id('password'));
            // password.sendKeys(arg4);  
            page.adminLogincredentials(arg3,arg4);         
            });

            this.Then(/^I press (.*?)$/, (arg1) => {
            //     var loginButton = element(by.buttonText('Login'));        
            //     loginButton.click();
            page.adminLoginClick();
            });

            this.When(/^.*I should be on the admin page (.*?)$/, (arg1) => {
            var adminUrl=page.getUrl();
            //var adminUrl=browser.getCurrentUrl();
            expect(adminUrl).to.eventually.equal(arg1);
            });

            this.Then(/^I should see role "([^"]*)"$/, function (arg1) {
            // var logout= element.all(by.id('logoutA')).getText();
            var adminName=page.adminName();
            expect(adminName).to.eventually.equal(arg1);     
            });

            //add challenge

            this.When(/^I fill challengedetails with (.*) , (.*) , (.*) and (.*)$/, (arg1, arg2,arg3,arg4) => {
            page.addChallenge(arg1,arg2,arg3,arg4);         
            });

            this.Then(/^I should press on Create$/, () => {
            page.createClick();
            });

            this.Then(/^I click logout should see login page (.*?)$/, (arg) => {
            var url=page.getLogoutA();
            expect(url).to.eventually.equal(arg); 
            });


}














 //then(function () {
          // expect(browser.getCurrentUrl()).to.eventually.equal(arg2).and.notify(callback);
          //   });
              
    
                  
                   //adminPage.submitTask();
                //      var adminUrl=browser.getCurrentUrl();
                     
                //  expect(adminUrl).to.eventually.equal(arg2).and.notify(callback);
                //callback();

// var configure = function () {
//   this.setDefaultTimeout(60*1000);
// };

// import { Start } from '../../src/screenplay/tasks/start';
//import { listOf } from '../../src/text';
// import { AddATodoItem } from '../../src/screenplay/tasks/add_a_todo_item';
// import { Actor } from 'serenity-js/lib/screenplay';

// import { POCLoginPageSerenity } from './login.po';
// import { browser, by, element,$ } from 'protractor';
// import {Challenges} from '../fakeChallenge';
// import {Coor2} from '../fakeCoordinatorChallenge';


// import { BrowseTheWeb } from 'serenity-js/lib/screenplay-protractor';
// import { protractor } from 'protractor';
// // import { expect } from '../../src/expect';
// import { TodoListItems } from '../../src/screenplay/questions/todo_list_items';







//   this.Given(/^.*that I am on (.*)$/, ( arg,callback) => {
//        var loginUrl=browser.getCurrentUrl();
//           expect(loginUrl).to.eventually.equal(arg).and.notify(callback);

//        // browser.get('http://localhost:49159/login');
//       callback();
//         // actor = Actor.named(actorName);
//         //  actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));

//         // actor.attemptsTo(
//         //     Start.withATodoListContaining(listOf(items))
//         // );

//         // callback();
//     });

//     //  this.Then(/^the title should equal (.*?)$/, (arg1,callback) => {
//     //      browser.sleep(500);
//     //       let list= element(by.id('Ltitle')).getText();
//     //       expect(list).to.eventually.equal(arg1).and.notify(callback);

//     //     // return actor.attemptsTo(
//     //     //     AddATodoItem.called(itemName)
//     //     // )
//     // });

//       this.When(/^I fill in (.*) and (.*) with (.*) and (.*)$/, (arg1, arg2,arg3,arg4, callback) => {
//             var email = element(by.id('username'));
//             email.clear();
//             email.sendKeys(arg3);
//             var password = element(by.id('password'));
//             password.clear();
//             password.sendKeys(arg4);
//             callback();
//     });
    
//     this.When(/^I press (.*?)$/, (arg1,callback) => {
//         var loginButton = element(by.name('clickMe'));
//           loginButton.click();
//              callback();
//         // return actor.attemptsTo(
//         //     AddATodoItem.called(itemName)
//         // )
//     });
 
//      this.Then(/^.*I should be on the admin page (.*?)$/, (arg1,callback) => {
//          var adminUrl=browser.getCurrentUrl();
//           expect(adminUrl).to.eventually.equal(arg1).and.notify(callback);
//             callback(); 
//         // return expect(actor.toSee(TodoListItems.Displayed)).eventually.deep.equal(listOf(items));
//     });

//      this.Then(/^I should see "([^"]*)"$/, function (arg1, callback) {
//         var logout= element.all(by.id('logoutA')).getText();
//           expect(logout).to.eventually.equal(arg1).and.notify(callback);
//          callback();
//        });

// // ...
// }