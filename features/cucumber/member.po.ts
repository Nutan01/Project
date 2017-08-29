import { browser, by, element ,ElementFinder,promise,protractor} from 'protractor';

export class POCLoginMemberPage {
 
  navigateTo() {
      return browser.get('/');
  }
   
 getUrl(){
     return browser.getCurrentUrl();
 }
//===============================================================member =================================================

//Member Login
  memberLogin(userName:string, pass:string){
      
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

   memberRole(){
    var name= element(by.id('mrole'));
    return name.getText();
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
  return browser.getCurrentUrl();
}
}
