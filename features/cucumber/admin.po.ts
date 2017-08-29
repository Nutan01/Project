import { browser, by, element ,ElementFinder,promise,protractor} from 'protractor';

export class POCLoginAdminPage {
 
  navigateTo() {
      return browser.get('/');
  }
 
 getUrl(){
     return browser.getCurrentUrl();
 }

//===============================================================admin =================================================


//Admin Login
  adminLogincredentials(userName:string, pass:string){
   // browser.driver.sleep(5000000);
   
  var email = element(by.id('username'));
  var password = element(by.id('password'));


  //clear action for clear the input text 
    // email.clear();
    // password.clear();

  //sendkeys actions to send the value to the input text
    email.sendKeys(userName);
    password.sendKeys(pass);
  
   // return userName+pass;

  }

  adminLoginClick(){
    //click action for click selected locator
      var loginButton = element(by.buttonText('Login'));
      loginButton.click();

  // to hold screen
    // browser.driver.sleep(500);

     //return browser.getCurrentUrl();
  }

adminName(){
    var name= element(by.id('role'));
    return name.getText();
}

  //admin component test case

addChallenge(cName:string,desc:string,sDate:string,eDate:string){

      var challengeName = element(by.id('challengeName'));
      challengeName.sendKeys(cName);

      var description = element(by.id('description'));
      description.sendKeys(desc);

      var startdate = element(by.id('startdate'));
      startdate.sendKeys(sDate);

      var endDate = element(by.id('endDate'));
      endDate.sendKeys(eDate);

      var assigns = element.all(by.id('assigns'));

      //in get () pass the index
      var assi= assigns.get(1).click();

}
createClick(){
      var create = element(by.buttonText('Create'));
      create.click();
}

  //logout Admin
  getLogoutA(){
      element.all(by.id('logoutA')).click();
  return browser.getCurrentUrl();
  }

}
