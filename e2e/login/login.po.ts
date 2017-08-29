import { browser, by, element ,ElementFinder,promise,protractor} from 'protractor';

export class POCLoginPage {
 
  navigateTo() {
      return browser.get('/');
  }
  // navigateToAdmin() {
  //     return browser.get('http://localhost:4000/admin');
  // }

//  wait(){
//      browser.ignoreSynchronization = true;
//       return browser.driver.sleep(5000);
//  }

//===============================================================admin =================================================

//Admin Login
  adminLogin(){
     var loginURL;
    
  var email = element(by.id('username'));
  var password = element(by.id('password'));
  var loginButton = element(by.name('clickMe'));

  //clear action for clear the input text 
    email.clear();
    password.clear();

  //sendkeys actions to send the value to the input text
    email.sendKeys('Admin001');
    password.sendKeys('@123');
  
  //click action for click selected locator
    loginButton.click();

  // to hold screen
     browser.driver.sleep(500);

     return browser.getCurrentUrl();
  }

  //admin component test case

addChallenge(){
      // let index= element.all(by.id('btnYes'));

      //create instance for protractors expected conditions
      var EC = protractor.ExpectedConditions;

      var challengeName = element(by.id('challengeName'));
      //browser.wait(EC.visibilityOf(challengeName), 5000);
      challengeName.sendKeys('absdvd');

      var description = element(by.id('description'));
      //browser.wait(EC.visibilityOf(description), 5000);
      description.sendKeys('Advsdvkm');

      var startdate = element(by.id('startdate'));
      startdate.sendKeys('07-12-2018');
      //browser.driver.sleep(5000);

      var endDate = element(by.id('endDate'));
      //browser.wait(EC.visibilityOf(endDate), 5000);
      endDate.sendKeys('07-12-19');
      //browser.driver.sleep(5000); 

      var assigns = element.all(by.id('assigns'));
      //browser.wait(EC.visibilityOf(assigns), 50000);
      //in get () pass the index
      var assi= assigns.get(1).click();
      //browser.driver.sleep(5000); 

      var create = element(by.name('create'));
      //browser.wait(EC.visibilityOf(create), 5000);
      create.click();
      // browser.driver.sleep(5000);
      return true;
}

  //logout Admin
  getLogoutA(){
      element.all(by.id('logoutA')).click();
  return true;
  }

//===============================================================member =================================================

//Member Login
  memberLogin(){
        var loginURL;
        var email = element(by.id('username'));
        var password = element(by.id('password'));
        var loginButton = element(by.name('clickMe'));
        email.clear();
        password.clear();

        email.sendKeys('Member001');
        password.sendKeys('@123');
        loginButton.click();
        browser.driver.sleep(500);
        return browser.getCurrentUrl();
      }

  //member component test case

getChallengeName(){
    let list= element.all(by.id('listgetname'));
 return list;
}
getStartDate(){
    let list= element.all(by.id('startdate'));
 return list;
}

getEndDate(){
    let list= element.all(by.id('enddate'));
 return list;
}

getDescription(){
    let list= element.all(by.id('description'));
 return list;
}

  //logout 
  
getLogoutM(){
    element.all(by.id('logoutM')).click();
 return true;
}

//===============================================================coordinator =================================================

//Coordinator Login
  coordinatorLogin(){
    var loginURL;
    var email = element(by.id('username'));
    var password = element(by.id('password'));
    var loginButton = element(by.name('clickMe'));
    email.clear();
    password.clear();

    email.sendKeys('Coordinator002');
    password.sendKeys('@123');
    loginButton.click();
    browser.driver.sleep(500);
    return browser.getCurrentUrl();
  }

  //Coordinator TEst case

getChallengeNameC(){
    let list= element.all(by.id('getnameC'));
 return list;
}

getStartDateC(){
    let list= element.all(by.id('startdateC'));
 return list;
}

getEndDateC(){
    let list= element.all(by.id('enddateC'));
 return list;
}

getDescriptionC(){
    let list= element.all(by.id('descriptionC'));
 return list;
}


  //logout coordinator

getLogoutC(){
    element.all(by.id('logoutC')).click();
 return true;
}






























// getContainer(): ElementFinder {
//   //browser.waitForAngular();
//  var EC = protractor.ExpectedConditions;
// browser.wait(EC.visibilityOf(element(by.css('app-login form input[type="text"]'))), 3000);

//         return element(by.css('app-login form input[type="text"]'));
//     }

//  setUserNameText() {
//    //this.wait();
//       let value = 'Admin001';
//       // browser.wait(function () {
//       // return element(by.css('app-login form input[type="text"]')).isPresent();
//       // },1000);
//       console.log(element(by.css('app-login form input[type="text"]')).sendKeys(value));
//       return element(by.css('app-login form input[type="text"]')).sendKeys(value);
//     // return this.getContainer().sendKeys(value);
//   }

//   getUserNameText() {
      
//       this.setUserNameText();
    
//       return element(by.css('app-login form input[type="text"]')).getAttribute('value');
//     }

//     // let value = 'Admin001';
//       //let elem=element(by.css('app-login form input[type="text"]'));
//        // expect(elem.getAttribute('value')).toBe(value);

//   setPasswordText() {
//       let value = '@123';
//     return element(by.css('app-login form input[type="password"]')).sendKeys(value);
//   }

//   getPasswordText() {
//       this.setPasswordText();
//       return element(by.css('app-login form input[type="password"]')).getAttribute('value');
//     }




//     clickLoginButton() {
//       //check if login button is present & visible
//         // var loginButtonExists = by.id('loginbutton');            
//         // browser.driver.wait(function() {
//         //     return browser.driver.isElementPresent(loginButtonExists); 
//         // }, 5000);
      
      
//         var loginButton = browser.driver.findElement(by.id('loginbutton'));
//        // loginButton.click();
//  // Click to sign in - waiting for Angular as it is manually bootstrapped.
//       loginButton.click().then(() =>{
//   //       browser.driver.wait(function() {
//   //       return browser.driver.getCurrentUrl().then(function(url) {
//   //           return /success/.test('/admin');
//   //       });
//   // }, 10000);
//         browser.waitForAngular();
//        // browser.get('http://localhost:49160/admin');
//  //element(by.tagName('app-admin')).isPresent();
//   //element(by.css('showingAdmin')).sendKeys('true');
//       //  expect(browser.driver.getCurrentUrl()).toMatch('http://localhost:49160/admin');
//       });
//         return true;
//     }
     // //check if email field exists to see if the pop-up has been succesfully loaded
        // var emailFieldExists = by.id('a0-signin_easy_email');
        // browser.driver.wait(function() {
        //     return browser.driver.isElementPresent(emailFieldExists); 
        // }, 5000);
        // //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
        // browser.driver.sleep(2000);

        // //type credentials and click the 'access' button to log in
        // var emailField = element(by.id('a0-signin_easy_email'));
        // emailField.sendKeys('test@user.com');
        // var passWordField = element(by.id('a0-signin_easy_password'));
        // passWordField.sendKeys('0000');
        // var accessButton = element(by.css('.a0-notloggedin .a0-primary'));
        // accessButton.click();

        // //verify that the login was succesfull by checking if the logout button is displayed
        // var logoutButtonExists = by.id('logoutButton');         
        // browser.driver.wait(function() {
        //     return browser.driver.isElementPresent(logoutButtonExists); 
        // }, 5000);
             
 
 
    
 
}
