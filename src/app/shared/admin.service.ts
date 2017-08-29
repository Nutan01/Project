import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminService {
constructor(private http:Http) { }

 private headers = new Headers({'content-Type' : 'application/json'});

 body :any= null;

  setBody(body:any):void {
      this.body=body;
  }
  
   
  postChallenge(): Promise<any> {
     return this.http.post("http://localhost:54661/api/Admin/createChallenge",this.body, {headers:this.headers})
                 .toPromise()
                 .then(response => response.json());
                // .catch(this.handleError);
  }

  getCoordinator():Promise<any> {
      return this.http.get("http://localhost:54661/api/Admin/getChallengeCoordinator")
                 .toPromise()
                 .then((response) => response.json() || null);
                // .catch(this.handleError);
  }

  assignCoordinator(challengeCoordinatorrId):Promise<any> {
      return this.http.post("http://localhost:54661/api/Admin/assignChallengeToCoordinator?coordinatorId="+ challengeCoordinatorrId , {headers:this.headers})
                 .toPromise()
                 .then((response) => response.json() );
                // .catch(this.handleError);
  }
}
