import { Response, ResponseOptions,Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Challenges } from '../backend/challenge.data.mock';
import { Challenge } from '../model/challenge';
export class ChallengeHttpServiceMock {

  get() {
    let response = new ResponseOptions({
      body: JSON.stringify(Challenges)
    });
    return Observable.of(new Response(response));
  }
//  constructor(private http: Http) {
//   }

// Url='backend/challenge.data.mock';
//  get(): Promise<Challenge[]> {
//     return this.http
//       .get(this.Url)
//       .toPromise()
//       .then(response => response.json().data as Challenge[]);
      
//  }
   getById(id:string) {
       let r = Challenges.filter(x=> x.challengeCoordinatorId == id);
     console.log("ac"+r);
    let response = new ResponseOptions({
           body: r
           
    });
    console.log(response);
    return Observable.of(new Response(response));
   }
  

  

//     getById(id:string): Promise<Challenge> {
//     return this.get()
//       .then(Challenge => Challenge.find(Challenge => Challenge.challengeId === id));
//   }
}