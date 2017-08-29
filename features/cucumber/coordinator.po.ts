import { browser, by, element ,ElementFinder,promise,protractor} from 'protractor';

export class POCLoginCoordinatorPage {
 
  navigateTo() {
      return browser.get('/');
  }
   
 getUrl(){
     return browser.getCurrentUrl();
 }

 
//===============================================================coordinator =================================================

//Coordinator Login
  coordinatorLogin(userName:string, pass:string){
   
    var email = element(by.id('username'));
    var password = element(by.id('password'));
   

    email.sendKeys(userName);
    password.sendKeys(pass);
   
  }

loginClick(){
    //click action for click selected locator
      var loginButton = element(by.buttonText('Login'));
      loginButton.click();

   }

   coordinatorRole(){
    var name= element(by.id('crole'));
    return name.getText();
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
    element.all(by.name('logoutC')).click();
return browser.getCurrentUrl();
}

}