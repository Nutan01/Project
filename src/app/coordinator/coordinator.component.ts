import { Component, OnInit } from '@angular/core';
import { ShowHideService } from '../shared/show-hide.service';
import { ChallengeService} from '../shared/challenge.service';
import{Challenge} from '../model/challenge';
import { CurrentUser } from '../model/currentuser';
@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {
currentUsers=new CurrentUser();
currentUser=new CurrentUser();
//currentUser;
id:string;
challenges:Array<Challenge>;

  constructor(
     private challengeService:ChallengeService,
     private showHideService:ShowHideService
  ) { }

  ngOnInit() {
     this.currentUser = JSON.parse(localStorage.getItem('user'));
     this.getChallengeByCoordinatorId();
  }

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
         showingLogOut:boolean= this.showHideService.showingLogOut;
         showingLogin:boolean=   this.showHideService.showingLogin;
         showingCoordinator:boolean=true;

setId(id:string){
this.id=id;
console.log(this.id);
}
   getChallengeByCoordinatorId(){
   this.id=this.currentUser.id;
        this.challengeService.getChallengeByCoordinatorId(this.id).then(response=>{this.challenges=response; }  );
        // this.challengeService.getChallengesByCoordinatorId(this.id).subscribe(response=>{this.challenges=response; console.log(this.challenges) 
        // return response} );
       
    }

  selectedIndex: number = -1;

  selectItem(index) {
    //console.log(index);
    this.selectedIndex = index;
  }

}
