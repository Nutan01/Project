import { TestBed, async,ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { ShowHideService} from './shared/show-hide.service';
describe('AppComponent', () => {
 
 let component: AppComponent;
  let fixture: ComponentFixture<CoordinatorComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,FormsModule,ReactiveFormsModule],
      declarations: [
        AppComponent,
        LoginComponent,
        MemberComponent,
        AdminComponent,
        CoordinatorComponent
      ],
      providers:[ShowHideService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('should get the show login', () => {
  // //  component.ngOnInit();

  //       expect(component.showingLogin).toBeTruthy();
  // });


  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  // }));
});
