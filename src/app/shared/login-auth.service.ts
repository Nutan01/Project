import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginAuthService {

 constructor(private http:Http) { }

  authenticate(username,password) : Promise<any> {
      return this.http.get("http://localhost:54661/api/Login/Authenticate?uname="+ username+"&Pwd="+password)
                 .toPromise()
                 .then((response) =>
                    response.json()
                 
                 );

                // .catch(this.handleError);
  }


}
