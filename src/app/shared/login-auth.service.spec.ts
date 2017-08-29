import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { LoginAuthService } from './login-auth.service';
import { User } from '../model/user';

describe('LoginAuthService', () => {
  let res=new User();
  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [
        HttpModule
    ],
      providers: [LoginAuthService]
    });
  });

  it('should be created', inject([LoginAuthService], (service: LoginAuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should send coordinators', inject([LoginAuthService], (service: LoginAuthService) => {
   res.username="Coordinator002";
   res.password="@123";
        service.authenticate(res.username,res.password).then( data => {
      expect(data).toEqual({name: 'Aman', role: 'ChallengeCoordinator', id: 'Coordinator002' });
      
    });
   
  }));
});