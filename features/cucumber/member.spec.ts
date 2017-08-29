import { POCLoginMemberPage } from './member.po';
import { browser, by, element} from 'protractor';
//import {Challenges} from '../fakeChallenge';
// import {Coor2} from '../fakeCoordinatorChallenge';
import { protractor } from 'protractor';

module.exports = function memberPage() {
     
        let page=new POCLoginMemberPage();
      
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        var expect = chai.expect; 

  
            this.Given(/^.*that for member I am on (.*)$/, ( arg) => {
            browser.get('http://localhost:49159/login');
            var loginUrl=page.getUrl();
            expect(loginUrl).to.eventually.equal(arg);

            });


            this.When(/^I fill member (.*) and (.*) with (.*) and (.*)$/, (arg1, arg2,arg3,arg4) => {
            page.memberLogin(arg3,arg4);         
            });

            this.Then(/^I enter (.*?) for member$/, (arg1) => {
            page.loginClick();
            });

            this.When(/^.*I should be on the member page (.*?)$/, (arg1) => {
            var memberUrl=page.getUrl();

            expect(memberUrl).to.eventually.equal(arg1);
            });

            this.Then(/^I should see member role "([^"]*)"$/, function (arg1) {
            var member=page.memberRole();
            expect(member).to.eventually.equal(arg1);     
            });

            this.Then(/^I enter logout should see login page (.*?)$/, (arg) => {
            var url=page.getLogoutM();
            expect(url).to.eventually.equal(arg); 
            });


}



