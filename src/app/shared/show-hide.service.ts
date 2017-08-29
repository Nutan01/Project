import { Injectable } from '@angular/core';

@Injectable()
export class ShowHideService {
    
    showingMovie:boolean=   false;
    showingLogOut:boolean= false;
    showingLogin:boolean=   true;
    showingMember:boolean=   false;
     showingAdmin:boolean=   false;
    showingCoordinator:boolean=false;

    setshowingAdmin(showingAdmin:boolean):void {
        this.showingAdmin = showingAdmin;
    }
     setshowingCoordinator(showingCoordinator:boolean):void {
        this.showingCoordinator = showingCoordinator;
    }
    setshowingMovie(showingMovie:boolean):void {
        this.showingMovie = showingMovie;
    }
     setshowingMember(showingMember:boolean):void {
        this.showingMember = showingMember;
    }
  
    setShowingLogin(showingLogin:boolean):void {
        this.showingLogin = showingLogin;
    }
     setShowingLogout(showingLogOut:boolean):void {
        this.showingLogOut = showingLogOut;
    }

    
      getshowingCoordinator():boolean {
        return this.showingCoordinator;
    } 
    getshowingMovie():boolean {
        return this.showingMovie;
    }
     getshowingMember():boolean {
        return this.showingMember;
    }
      getshowingAdmin():boolean {
        return this.showingAdmin;
    }
    
    getShowingLogout():boolean {
        return this.showingLogOut;
    }
    
    getShowingLogin():boolean {
        return this.showingLogin;
    }
  constructor() { }

}
