import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { MemberComponent } from './member.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ChallengeService} from '../shared/challenge.service';
import { ShowHideService} from '../shared/show-hide.service';
import { ChallengeHttpServiceMock } from '../backend/challenge.service.mock';
// import {Store} from "@ngrx/store";
// import {Observable} from 'rxjs/Observable';
describe('MemberComponent', () => {
  let component: MemberComponent;
  let fixture: ComponentFixture<MemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,RouterTestingModule],
     
      declarations: [ MemberComponent ],
      providers:[ChallengeService,ChallengeHttpServiceMock,ShowHideService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    //component.setcurrentUser("Nutan","Member");
    expect(component).toBeTruthy();
  });

//  it('should be get user name', () => {
//    //component.setcurrentUser("Nutan","Member");
//    //component.getcurrentUser();
//     expect(component.getcurrentUser()).toBe("Nutan");
//  });

//  it('should be get user role', () => {
//   // component.setcurrentRole("Member");
//     expect(component.getcurrentRole()).toBe("Member");
//  });
});
