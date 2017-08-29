import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ChallengeService} from '../shared/challenge.service';
import { ShowHideService } from '../shared/show-hide.service';
import {Member} from '../model/member';
import {CurrentUser} from '../model/currentuser';
import { Http, RequestOptions, Headers, Response,ResponseContentType } from '@angular/http';  
import {Challenge} from '../model/challenge';
import * as FileSaver from 'file-saver';
import {Post,Get,Delete} from '../model/action';
// import {Store} from "@ngrx/store";
// import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit,OnDestroy {
private isUploadBtn: boolean = true; 
//state$:Observable<Challenge[]>;
currentUsers=new CurrentUser();
currentUser=new CurrentUser();
//challenges:Array<Member>;
challenges:any={};
  showingLogOut:boolean= this.showHideService.showingLogOut;
        showingLogin:boolean=   this.showHideService.showingLogin;
         showingMember:boolean=true;
  constructor(
      private challengeService:ChallengeService,
        private showHideService:ShowHideService,
        private http: Http,
         // private store: Store<Challenge>
  ) { 
    // this.state$=store.select('store');
    this.getChallenge();
  }

  ngOnInit() {
         this.currentUser = JSON.parse(localStorage.getItem('user'));
    //      this.state$.subscribe(p=>
    // {this.challenges=p}
    // );
     //this.getChallenge();
  }

  ngOnDestroy(){
     // localStorage.removeItem('user');
  }
  name;
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
   getChallenge(){
       //karma testing=================
        //this.challengeService.getChallenges().subscribe(response=>{this.challenges=response; }  );

        //service===================
        this.challengeService.getChallenge().then(response=>{this.challenges=response; }  );

        //ng store===============
    //       this.challengeService.getChallenge().then(response=>{
    // this.store.dispatch({type:Get,payload:response
    // })} );
     }
 
     selectedIndex: number = -1;


  selectItem(index) {
    console.log(index);
    this.selectedIndex = index;
  }

//file upload event  
// fileChange(event) {  
// debugger;  
// let fileList: FileList = event.target.files;  
// if (fileList.length > 0) {  
// let file: File = fileList[0];  
// let formData: FormData = new FormData();  
// formData.append('uploadFile', file, file.name);  
// let headers = new Headers()  
// //headers.append('Content-Type', 'json');  
// //headers.append('Accept', 'application/json');  
// let options = new RequestOptions({ headers: headers });  
// let apiUrl1 = "http://localhost:54661/api/UploadFile/Upload";  
// this.http.post(apiUrl1, formData, options)  
// .map(res => res.json())  
// .catch(error => Observable.throw(error))  
// .subscribe(  
// data => console.log('success'),  
// error => console.log(error)  
// )  
// }  
// //window.location.reload();  
// }

//file download

// downloadFile(): void { 
//   let filename = "1234.jpg";
//     let url: string = "http://localhost:54661/api/UploadFile/getfile/" ;
//    let headers = new Headers({ 'Content-Type': 'application/json'} );
      
//     //in case you have custom headers, else you can ignore this part
//     // headers.set('x-custom-header1', “some value”);
//     // headers.set('x-custom-header2', “some value2”);

//     let options = new RequestOptions({responseType: ResponseContentType.Blob, headers });
//     //let data = new Blob([response.data], {type: 'image/jpeg;charset=UTF-8'});
               
         
//     this.http.get(url + filename)
//         .map(res => res.blob())
//         .subscribe(
           
//         data => {
       
//          FileSaver.saveAs(data ,filename); 
//         },
//         err => {
//             console.log('error');
//             console.error(err);
//         });
// }
}
 
 
  
