import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AdminComponent } from './admin.component';
import { ShowHideService } from '../shared/show-hide.service';
import { AdminService } from '../shared/admin.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,FormsModule,HttpModule,ReactiveFormsModule ],
      declarations: [ AdminComponent ],
      providers:[ShowHideService,AdminService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
     component.setcurrentUser("Nutan","Admin");
    expect(component).toBeTruthy();
  });

  it('should be get user name', () => {
   //component.setcurrentUser("Nutan","Member");
   //component.getcurrentUser();
    expect(component.getcurrentUser()).toBe("Nutan");
 });

 it('should be get user role', () => {
  // component.setcurrentRole("Member");
    expect(component.getcurrentRole()).toBe("Admin");
 });
});
