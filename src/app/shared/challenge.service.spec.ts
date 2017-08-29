import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ChallengeService } from './challenge.service';
import { ChallengeHttpServiceMock } from '../backend/challenge.service.mock';
import { Challenges } from '../backend/challenge.data.mock';
import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
describe('ChallengeService', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
         imports: [
        HttpModule
    ],
        providers: [
        ChallengeService,
        ChallengeHttpServiceMock,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ]
    });
  });

  it('should be created', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy();
  }));

 it('should return mock with mock challenges', inject([ChallengeService], (service: ChallengeService) => {
    return service.getChallenges().subscribe( data => {
      expect(data).toEqual(Challenges);
    });
  }));

  it('should return mock with service challenges', inject([ChallengeService], (service: ChallengeService) => {
    return service.getChallenge().then( data => {
      expect(data).toEqual(Challenges);
    });
  }));

 it('should return mock with mock  challenges by id', inject([ChallengeService], (service: ChallengeService) => {
        return service.getChallengesByCoordinatorId("Coordinator002").subscribe( data => {
      expect(data).toEqual(Challenges.filter(x=>x.challengeCoordinatorId=="Coordinator002"));
    });
  }));

   it('should return mock with service challenges by id', inject([ChallengeService], (service: ChallengeService) => {
        return service.getChallengeByCoordinatorId("Coordinator002").then( data => {
      expect(data).toEqual(Challenges.find(x=>x.challengeCoordinatorId=="Coordinator002"));
    });
  }));



  // it('should return challenges', inject([ChallengeService], (service: ChallengeService) => {
  //   return service.getChallenges().subscribe( data => {
  //     expect(data).toEqual(Challenges);
  //   });
  // }));

  //  it('should return challenges', inject([ChallengeService, MockBackend], (service: ChallengeService, backend: MockBackend) => {
  //   let response = new ResponseOptions({
  //     body: JSON.stringify(Challenges)
  //   });

  //   const baseResponse = new Response(response);

  //   backend.connections.subscribe(
  //     (c: MockConnection) => c.mockRespond(baseResponse)
  //   );

  //   return service.getChallenges().subscribe( data => {
  //     expect(data).toEqual(Challenges);
  //   });
  // }));


  //  it('should return challenges by id', inject([ChallengeService], (service: ChallengeService) => {
  //       return service.getChallengesByCoordinatorId("Coordinator002").subscribe( data => {
  //     expect(data).toEqual(Challenges);
  //   });
  // }));

});
