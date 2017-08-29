import { POCLoginCoordinatorPage } from './coordinator.po';
import { browser, by, element} from 'protractor';
import {Challenges} from '../fakeChallenge';
// import {Coor2} from '../fakeCoordinatorChallenge';
import { protractor } from 'protractor';

module.exports = function loginPage() {
      
        let page=new POCLoginCoordinatorPage();
      
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        var expect = chai.expect; 


        this.Given(/^.*that for coordinator I am on (.*)$/, ( arg) => {
        browser.get('http://localhost:49159/login');
        var loginUrl=page.getUrl();
        expect(loginUrl).to.eventually.equal(arg);
            
        });


        this.When(/^I fill coordinator (.*) and (.*) with (.*) and (.*)$/, (arg1, arg2,arg3,arg4) => {
        page.coordinatorLogin(arg3,arg4);         
        });

        this.Then(/^I enter (.*?) for coordinator$/, (arg1) => {
        page.loginClick();
        });

        this.When(/^.*I should be on the coordinator page (.*?)$/, (arg1) => {
        var memberUrl=page.getUrl();
        expect(memberUrl).to.eventually.equal(arg1);
        });

        this.Then(/^I should see coordinator role "([^"]*)"$/, function (arg1) {
        var member=page.coordinatorRole();
        expect(member).to.eventually.equal(arg1);     
        });

        this.Then(/^I click logout for coordinator$/, () => {
        var url=page.getLogoutC();
        expect(url).to.eventually.equal("http://localhost:49159/login");   
        });


}



