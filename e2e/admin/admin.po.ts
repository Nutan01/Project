import { browser, $, by, element,protractor ,ElementFinder,promise} from 'protractor';

export class POCAdmin {
  // navigateTo() {
  //   return browser.get('http://localhost:4000/admin');
  // }

// Add Challenge


// addList()
// {
//  var EC = protractor.ExpectedConditions;
//  let index= element.all(by.name('Movie')).click();

//   //browser.wait(EC.visibilityOf(index), 5000);
//  // index.click();
// return true;
// }
checkElement()
{
  var elementFromSecondPage = $('#check');
browser.wait(protractor.until.elementIsVisible(elementFromSecondPage), 50000, 'Error: Element did not display within 5 seconds');
return true;
}

addChallenge()
{
browser.ignoreSynchronization = true;
//browser.waitForAngular();
//browser.sleep(500); 
 // let index= element.all(by.id('btnYes'));
var EC = protractor.ExpectedConditions;
browser.driver.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /admin/.test(url);
      });
    }, 10000);
  var id = element(by.className('admin')).element(by.name('challengeName'));
  //browser.wait(EC.presenceOf(id), 5000);
  //id.clear();
  
//   var name = element(by.name('mname'));
//   browser.wait(EC.visibilityOf(name), 50000000000000000000000000000000000);
//    name.clear();
//     name.sendKeys('KAbali');
//   var rating = element(by.name('rating'));
//   browser.wait(EC.visibilityOf(rating), 50000000000000000000000000000000000);
// rating.clear();
//       rating.sendKeys('2');
  // var create = element(by.name('create'));
  // browser.wait(EC.visibilityOf(create), 50000000);
// add.click();

 return  id.getText();
}





































































getname(){
  browser.ignoreSynchronization = true;
  let EC=protractor.ExpectedConditions;
  var name=element(by.id('names'));
  browser.wait(EC.visibilityOf(name),500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
   return element(by.id('names')).getText();
}


  getContainer(): ElementFinder {
        return element(by.binding('currentUser.name'));
    }
 setAdminName() {
     // this.wait();
     // browser.pause();
      let value = 'Himanshi';
    return this.getContainer().sendKeys(value);
    
  }


















































  getAdminName() {
   
   
     //angular is not defined
     //browser.driver.sleep(10000);
         // browser.waitForAngular();
     //window.angular is undefined
      //browser.ignoreSynchronization = true;
 
      return  element(by.binding('currentUser.name')).getText();








    // this.wait();
     
    
   //  browser.waitForAngular();
      
//      browser.driver.wait(function() {
//         return browser.driver.getCurrentUrl().then(function(url) {
//              return /success/.test('/admin');
//         });
//   }, 120000);
//this.setAdminName();
    //browser.driver.get(browser.baseUrl);
    // const messageLocator = element(by.binding("currentUser.name"));
    //  browser.$('[*ngIf=showingAdmin]').isPresent().then(function(fnct){
    //         if(fnct){
    //         browser.$('[*ngIf=showingAdmin]')
    //          }
    //        else{
    //          let nm =element(by.binding('currentUser.name')).sendKeys("Himanshi");
    //       return element(by.tagName('i')).getAttribute('value');
    //          }
    //     });
   
    // return messageLocator.getAttribute('value');
        
    }
 
 wait(){
     browser.ignoreSynchronization = true;
      return browser.driver.sleep(5000);
 }


 
// getContainer(): ElementFinder {
//         return element(by.className('admin'));
//     }
//  getCompletedMenuItem(): ElementFinder {
//         return this.getContainer()
//             .element(by.id('name'));
//     }
//     getCompletedMenuItemText(): promise.Promise<string> {
//         this.wait();
//         return this.getCompletedMenuItem().getText();
//     }






 setUserNameText() {
      browser.ignoreSynchronization = true;
       browser.driver.sleep(5000);
      let value = 'sdvdfv';
       element(by.tagName('app-admin')).isPresent();
    return element(by.model('challengeModel.challengeName')).sendKeys(value);
  }

//   getUserNameText() {
//       this.setUserNameText();
//       return element(by.css('app-login form input[type="text"]')).getAttribute('value');
//     }

    // let value = 'Admin001';
      //let elem=element(by.css('app-login form input[type="text"]'));
       // expect(elem.getAttribute('value')).toBe(value);

  setPasswordText() {
       browser.ignoreSynchronization = true;
        browser.driver.sleep(5000);
      let value = 'fvdfv';
       element(by.tagName('app-admin')).isPresent();
    return element(by.model('challengeModel.description')).sendKeys(value);
  }

//   getPasswordText() {
//       this.setPasswordText();
//       return element(by.css('app-login form input[type="password"]')).getAttribute('value');
//     }
}
