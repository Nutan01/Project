import { Component, OnInit } from '@angular/core';
import { ShowHideService } from '../shared/show-hide.service';
import { AdminService } from '../shared/admin.service';
import { Challenge } from '../model/challenge';
import { CurrentUser } from '../model/currentuser';
import { Coordinator } from '../model/coordinator';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Post,Get,Delete} from '../model/action';
import {Store} from "@ngrx/store";
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
currentUsers=new CurrentUser();
currentUser=new CurrentUser();
 //currentUser;
 challengeModel: any = {};
 coordinator: Array <Coordinator> [];

  showMsg:boolean;
                  msg:string;
//challengeModel:Challenge[];
  constructor(
      private showHideService:ShowHideService,
      private adminService:AdminService,
      private _formBuilder:FormBuilder
  ) {
  
   }

         showingLogOut:boolean= this.showHideService.showingLogOut;
         showingLogin:boolean=   this.showHideService.showingLogin;
         showingAdmin:boolean=true;

 setcurrentUser(name:string,role:string):void{
    this.currentUsers.name=name;
    this.currentUsers.role=role;
 
         localStorage.setItem('user', JSON.stringify(this.currentUsers));
   
  }
  getcurrentUser():string{
      return this.currentUser.name;
  }
  role;
  // setcurrentRole(role:string):void{
  //    this.currentUsers.role=role;
  //     localStorage.setItem('user', JSON.stringify(this.currentUsers.role));
    
  // }
  getcurrentRole():string{
   
    return this.currentUser.role;
  }


     userForm:FormGroup;

   ngOnInit() {
      this.userForm= this._formBuilder.group({
             challengeName:[null,[Validators.required]],
             description:[null,[Validators.required]],  
             startdate:[null,[Validators.required]],
             endDate:[null,[Validators.required]]  
      });
            this.currentUser = JSON.parse(localStorage.getItem('user'));
            this.getCoordinator();
     }

   createchallenge() {
     debugger;  
     if(this.challengeModel.challengeCoordinatorId!=null){
   debugger;
            if(this.challengeModel.challengeName!=null && this.challengeModel.description!=null && this.challengeModel.startdate!=null
            && this.challengeModel.endDate!=null){
           debugger;
            this.adminService.setBody(this.challengeModel)
            this.adminService.postChallenge().then(response=>{

            if(response==true){  
            this.showMsg=true;
            this.msg="Challenge created..!!";
            }
            else
            {
            this.showMsg=true;
            this.msg="Fill the above details..!!";
            }
          });
         
          }
          else
          {
            this.showMsg=true;
            this.msg="Fill the above details..!!";
          }
          //this.challengeModel="";
     }
     else
     {
            this.showMsg=true;
            this.msg="Assign Coordinator";
     }

             
    }

    getCoordinator(){
           this.adminService.getCoordinator().then(response=>{this.coordinator=response}  );
    }

    setClickedRow(challengeCoordinatorId:string){
      // this.adminService.assignCoordinator(challengeCoordinatorrId);
      debugger;
      this.showMsg=false;
      this.challengeModel.challengeCoordinatorId=challengeCoordinatorId;
    }
    
}
