import { TestBed, inject } from '@angular/core/testing';
import { HttpModule} from '@angular/http';
import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [AuthenticateService]
    });
  });

  it('should be created', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service).toBeTruthy();
  }));
});
