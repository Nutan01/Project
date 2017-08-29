import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import{ShowHideService}from'./shared/show-hide.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string= "Welcome to app!!";
 showingProfile:boolean;
 showingMovie:boolean;
   showingLogOut:boolean;
    showingLogin:boolean;
     showingSignup:boolean;
     showingMember:boolean;
   showingAdmin:boolean;
    showingCoordinator:boolean;

constructor (private _formBuilder:FormBuilder,
private _service:ShowHideService){}

    ngOnInit() {
       this.showingLogin=this._service.getShowingLogin();
         // this.showingLogOut=this._service.getShowingLogout();
          this.showingMovie=this._service.getshowingMovie();
          this.showingMember=this._service.getshowingMember();
           this.showingAdmin=this._service.getshowingAdmin();
           this.showingCoordinator=this._service.getshowingCoordinator();
         
    }
    
    ngDoCheck(){
    
        this.showingMovie=this._service.getshowingMovie();
       this.showingMember=this._service.getshowingMember();
       // this.showingLogOut=this._service.getShowingLogout();
        this.showingLogin=this._service.getShowingLogin();
          this.showingAdmin=this._service.getshowingAdmin();
           this.showingCoordinator=this._service.getshowingCoordinator();
        
    }
 

}
