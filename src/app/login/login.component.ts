import { Component, OnInit ,Input} from '@angular/core';
import {UserAuthenticationService, User} from '../user-authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../shared/authenticate.service';
import { LoginAuthService } from '../shared/login-auth.service';
import { ShowHideService } from '../shared/show-hide.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
     moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    title:string="Login to your account";
 public user = new User('','');
    model: any = {};

    returnUrl: string;
  
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticateService,
          private loginService: LoginAuthService,
        private showHideService: ShowHideService,
        private userAuth:UserAuthenticationService,
            private _formBuilder:FormBuilder) { }


userForm:FormGroup;

    ngOnInit() {
        // reset login status
       // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

         this.userForm= this._formBuilder.group({
  username:[null,[Validators.required]],
    password:[null,[Validators.required]]  
  });
    }

       showingLogOut:boolean= this.showHideService.showingLogOut;
       showingLogin:boolean=   this.showHideService.showingLogin;
       showingSignUp:boolean=   this.showHideService.showingLogin;
       showingMovie:boolean=   this.showHideService.showingMovie;
         showingMember:boolean=   this.showHideService.showingMember;
           showingadmin:boolean=   this.showHideService.showingAdmin;
msg:string;
showMsg:boolean;
setUser(name:string,password:string){
    this.user.username=name;
    this.user.password=password;
}
getUserName(){
    return this.user.username;
}
getUserPass(){
    return this.user.password;
}
    login() {  

       if(this.user.username!="" && this.user.password!=""){

          this.loginService.authenticate(this.user.username,this.user.password).then(response=>{
             
               if(response!=null){       
              if((response.role)=="Admin") //Admin check
              {   
                   
                  localStorage.setItem('user', JSON.stringify(response));
                    
                  this.showHideService.setShowingLogin(false);
                   this.showHideService.setshowingAdmin(true);
                    this.showHideService.setShowingLogout(true);
                    this.showingLogin=false;
                    this.showMsg=false;
                  //  console.log(JSON.parse(localStorage.getItem('user')));
                  this.router.navigate(['admin']);  
              }

               if((response.role)=="Member") //Admin check
              {   
                   
                  localStorage.setItem('user', JSON.stringify(response));
                           
                  this.showHideService.setShowingLogin(false);
                   this.showHideService.setshowingMember(true);
                    this.showHideService.setShowingLogout(true);
                    this.showingLogin=false;
                    this.showMsg=false;
                   // console.log(JSON.parse(localStorage.getItem('user')));
                  this.router.navigate(['member']);  
              }

               if((response.role)=="ChallengeCoordinator") //Admin check
              {   
                   
                  localStorage.setItem('user', JSON.stringify(response));
                       
                  this.showHideService.setShowingLogin(false);
                      this.showHideService.setshowingCoordinator(true);
                    this.showHideService.setShowingLogout(true);
                    this.showingLogin=false;
                    this.showMsg=false;
                   // console.log(JSON.parse(localStorage.getItem('user')));
                  this.router.navigate(['challengeCoordinator']);  
              }}
               
                if(response==null)
                { // password check
                   // console.log(response);
                  this.showMsg=true;
                  this.msg="User name & password incorrect..!!";
                }
          });
      }
      else{
          this.showMsg=true;
          this.msg="fill the correct details";
          
      }      
                    
                    
                   


                    // if( this.userAuth.login(this.user)==true){

                    //  this.showHideService.setShowingLogin(false);
                    //  this.showHideService.setshowingMovie(true);
                    //  this.showHideService.setShowingLogout(true);
                    //  this.showingLogin=false;
                    //  this.showMsg=false;
                    // }
                    
                    //  if( this.userAuth.login(this.user)==false){
                         
                    //    this.showMsg=true;
                    //      this.msg="User name & password incorrect..!!";

                    //  }

        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.showHideService.setShowingLogin(false);
        //             this.showHideService.setshowingMovie(true);
        //             this.showHideService.setShowingLogout(true);
        //             this.router.navigate(['/movie']);
        //             this.showingLogin=false;
        //         },
        //         error => {
                                    
        //         });
    }
}

