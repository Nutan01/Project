import { TestBed, inject } from '@angular/core/testing';
import {HttpModule,Http} from '@angular/http';
import { AdminService } from './admin.service';
import { Coordinator } from '../backend/coordinator.data.mock';
import { Challenges } from '../backend/challenge.data.mock';
import { Challenge } from '../model/challenge';
describe('AdminService', () => {
  let res=new Challenge();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      providers: [AdminService]
    });
  });

  it('should be created', inject([AdminService], (service: AdminService) => {
    expect(service).toBeTruthy();
  }));

   it('should return coordinators', inject([AdminService], (service: AdminService) => {
    return service.getCoordinator().then( data => {
      expect(data).toEqual(Coordinator);
    });
  }));

  //  it('should send coordinators', inject([AdminService], (service: AdminService) => {
  //  res.challengeName="dv d";
  //  res.description="dvdv";
  //  res.startdate=new Date("2017/01/20") ;
  //  res.endDate=new Date("2017/01/20") ;
  //  res.challengeCoordinatorId="Coordinator002";
  //     //console.log(res);
  //      service.setBody(res);
  //    service.postChallenge().then( data => {
  //     expect(data).toBeTruthy();
      
  //   });
   
  // }));

   it('should assign coordinators', inject([AdminService], (service: AdminService) => {
         const expected = Coordinator[0];
   
        return service.assignCoordinator("Coordinator002").then( data => {
        expect(data).toContain(expected.challengeCoordinatorId== "Coordinator002");
        expect(data).toContain(expected.challengeCoordinatorrName== "Aman");
      
    });
  }));


   it('should return Coordinator by id', inject([AdminService], (service: AdminService) => {
        return service.assignCoordinator("Coordinator002").then( data => {
      expect(data).toBeTruthy();
    });
  }));
  


});
