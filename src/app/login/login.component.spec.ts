import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login.component';
import { MemberComponent } from '../member/member.component';
import { AdminComponent } from '../admin/admin.component';
import { CoordinatorComponent } from '../coordinator/coordinator.component';
import { MoviesComponent } from '../movies/movies.component';
import { AddmovieComponent } from '../movies/addmovie/addmovie.component';
import { SearchmoviePipe } from '../movies/searchmovie.pipe';
import { SortmoviePipe } from '../movies/sortmovie.pipe';
import { StarComponent } from '../star/star.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{ ApprouteModule } from '../approute/approute.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from '../shared/authenticate.service';
import { LoginAuthService } from '../shared/login-auth.service';
import { ShowHideService } from '../shared/show-hide.service';
import {UserAuthenticationService, User} from '../user-authentication.service';
import { By }              from '@angular/platform-browser';
import { DebugElement,Attribute }    from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let at:Attribute
 // query for the title <h1> by CSS element selector
   

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,FormsModule,ApprouteModule,RouterTestingModule,ReactiveFormsModule],
      declarations: [ LoginComponent ,AdminComponent,MemberComponent,CoordinatorComponent,MoviesComponent
      ,AddmovieComponent,
      SearchmoviePipe,
      SortmoviePipe,
      StarComponent],
      providers:[AuthenticateService
      ,LoginAuthService,ShowHideService,UserAuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

   it('should check login title', () => {
      de = fixture.debugElement.query(By.css('h3'));
    el = de.nativeElement;
      expect(el.textContent).toBe("Login to your account");
  });

  it('should check login button', () => {
      de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
      expect(el.textContent).toBe("Login");
  });

   it('should check for username', () => {
     component.setUser("Admin001","@123");
     de = fixture.debugElement.query(By.css('input[type="text"]'));
        el = de.nativeElement;
       // el.textContent="Admin001";
      expect(component.getUserName()).toContain( 'Admin001');
      expect(component.getUserPass()).toContain( '@123');
  });

});


