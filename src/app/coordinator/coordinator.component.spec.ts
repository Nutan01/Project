import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChallengeService} from '../shared/challenge.service';
import {HttpModule} from '@angular/http';
import { ChallengeHttpServiceMock } from '../backend/challenge.service.mock';
import { ShowHideService} from '../shared/show-hide.service';
import { Challenges } from '../backend/challenge.data.mock';
import { CoordinatorComponent } from './coordinator.component';

describe('CoordinatorComponent', () => {
  let component: CoordinatorComponent;
  let fixture: ComponentFixture<CoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpModule],
      declarations: [ CoordinatorComponent ],
      providers:[ChallengeService,ChallengeHttpServiceMock,ShowHideService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    // component.setcurrentUser("Nutan","Coordinator");
    expect(component).toBeTruthy();
  });

//   it('should be get user name', () => {
//    //component.setcurrentUser("Nutan","Member");
//    //component.getcurrentUser();
//     expect(component.getcurrentUser()).toBe("Nutan");
//  });

//  it('should be get user role', () => {
//   // component.setcurrentRole("Member");
//     expect(component.getcurrentRole()).toBe("Admin");
//  });

 it('should be set id', () => {
   component.setId("Coordinator002");
    //expect(component.getChallengeByCoordinatorId()).toBe("Admin");
 });

 it('should be get challenges by id', () => {
   let ch:ChallengeHttpServiceMock;
   //let value=ch.getById("Coordinator002");
  // console.log(value);
   component.setId("Coordinator002");
    expect(component.getChallengeByCoordinatorId()).toEqual(Challenges.find(x=>x.challengeCoordinatorId=="Coordinator002"));
 });
});
