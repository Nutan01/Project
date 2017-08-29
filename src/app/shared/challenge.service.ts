import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ChallengeHttpServiceMock } from '../backend/challenge.service.mock';

@Injectable()
export class ChallengeService {

constructor(
    private http:Http,
    private challengeHttp:ChallengeHttpServiceMock
    ) { }

 private headers = new Headers({'content-Type' : 'application/json'});

   
  getChallenge() : Promise<any> {
      return this.http.get("http://localhost:54661/api/Member/getChallenge")
                 .toPromise()
                 .then((response) => response.json() || null);
                // .catch(this.handleError);
  }

    getChallenges() {
    return this.challengeHttp.get().map(data => {
      return data.json();
    });
  }

//     getChallenges() {
//     return this.challengeHttp.get().then(data => {
//       return data;
//     });
//   }




  getChallengeByCoordinatorId(id:string) : Promise<any> {
      return this.http.get("http://localhost:54661/api/ChallengeCoordinator/getChallenge?id="+id)
                 .toPromise()
                 .then((response) => response.json() || null);
                // .catch(this.handleError);
  }

  getChallengesByCoordinatorId(id:string){
      return this.challengeHttp.getById(id).map(data => {
      return data.json();
    });
  }

// getChallengesByCoordinatorId(id:string){
//       return this.challengeHttp.getById(id).then(data => {
//       return data;
//     });
//   }
}
