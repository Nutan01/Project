import {  inject } from '@angular/core/testing';

import { ShowHideService } from './show-hide.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

describe('ShowHideService', () => {

  let comp:    ShowHideService;
  let fixture: ComponentFixture<ShowHideService>;
  let de:      DebugElement;
  let el:      HTMLElement;
  beforeEach(() => {
    comp=new ShowHideService();
    TestBed.configureTestingModule({
      providers: [ShowHideService]
    });
  });

// should be created
  it('should be created', inject([ShowHideService], (service: ShowHideService) => {
    expect(service).toBeTruthy();
  }));

// should be show instances
    it('should be show login true', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingLogin).toBeTruthy();
  }));

   it('should be show logout false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingLogOut).toBeFalsy();
  }));
  
 it('should be show movie false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingMovie).toBeFalsy();
  }));

   it('should be show member false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingMember).toBeFalsy();
  }));
   it('should be show admin false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingAdmin).toBeFalsy();
  }));

  it('should be show coordinator false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingCoordinator).toBeFalsy();
  }));

// should be set instances
   it('should be setlogin false', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogin(false);
    expect(comp.showingLogin).toBeFalsy();
  }));

 it('should be setlogout true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogout(true);
    expect(comp.showingLogOut).toBeTruthy();
  }));

   it('should be setmovie true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingMovie(true);
    expect(comp.showingMovie).toBeTruthy();
  }));

   it('should be setmember true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingMember(true);
    expect(comp.showingMember).toBeTruthy();
  }));

   it('should be setadmin true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingAdmin(true);
    expect(comp.showingAdmin).toBeTruthy();
  }));
   it('should be setcoordinator true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingCoordinator(true);
    expect(comp.showingCoordinator).toBeTruthy();
  }));

// should be get instances
   it('should be getlogin true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getShowingLogin();
    expect(comp.showingLogin).toBeTruthy();
  }));

 it('should be getlogout true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getShowingLogout();
    expect(comp.showingLogOut).toBeFalsy();
  }));

   it('should be getmovie true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getshowingMovie();
    expect(comp.showingMovie).toBeFalsy();
  }));

   it('should be getmember true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getshowingMember();
    expect(comp.showingMember).toBeFalsy();
  }));

   it('should be getadmin true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getshowingAdmin();
    expect(comp.showingAdmin).toBeFalsy();
  }));
   it('should be getcoordinator true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getshowingCoordinator();
    expect(comp.showingCoordinator).toBeFalsy();
  }));

// should be set and get instances
 it('should be setgetlogin  false', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogin(false);
     comp.getShowingLogin();
    expect(comp.showingLogin).toBeFalsy();
  }));

 it('should be setgetlogout true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogout(true);
     comp.getShowingLogout();
    expect(comp.showingLogOut).toBeTruthy();
  }));

   it('should be setgetmovie true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingMovie(true);
     comp.getshowingMovie();
    expect(comp.showingMovie).toBeTruthy();
  }));

   it('should be setgetmember true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingMember(true);
     comp.getshowingMember();
    expect(comp.showingMember).toBeTruthy();
  }));

   it('should be setgetadmin true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingAdmin(true);
     comp.getshowingAdmin();
    expect(comp.showingAdmin).toBeTruthy();
  }));
   it('should be setgetcoordinator true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingCoordinator(true);
     comp.getshowingCoordinator();
    expect(comp.showingCoordinator).toBeTruthy();
  }));
 
});
