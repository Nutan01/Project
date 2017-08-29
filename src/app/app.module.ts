import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgForm} from '@angular/forms'; 
import { ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import{ ApprouteModule } from './approute/approute.module';
import { AppComponent } from './app.component';
//import { DatepickerModule } from 'ngx-bootstrap/datepicker';

import { LoginComponent } from './login/login.component';
import{ApprouteRoutingModule} from './approute/approute-routing.module';
import {UserAuthenticationService, User} from './user-authentication.service';
import { ShowHideService } from './shared/show-hide.service'; 
import { MovieService } from './shared/movie.service'; 
import { AuthenticateService } from './shared/authenticate.service'; 
import { LoginAuthService } from './shared/login-auth.service'; 
import { ChallengeService } from './shared/challenge.service'; 
import { AdminService } from './shared/admin.service'; 
// used to create fake backend

import { BaseRequestOptions } from '@angular/http';

import { StarComponent } from './star/star.component';
import { MoviesComponent } from './movies/movies.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { EditmovieComponent } from './movies/editmovie/editmovie.component';
import { DeletemovieComponent } from './movies/deletemovie/deletemovie.component';
import { SearchmoviePipe } from './movies/searchmovie.pipe';
import { SortmoviePipe } from './movies/sortmovie.pipe';
import { AdminComponent } from './admin/admin.component';
import { MemberComponent } from './member/member.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { ChallengeHttpServiceMock } from './backend/challenge.service.mock';

import {Store, StoreModule } from '@ngrx/store';

import {rootReducer} from './model/store';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StarComponent,
    MoviesComponent,
    AddmovieComponent,
    EditmovieComponent,
    DeletemovieComponent,
    SearchmoviePipe,
    SortmoviePipe,
    AdminComponent,
    MemberComponent,
    CoordinatorComponent
    
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ApprouteModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpModule,
    ApprouteRoutingModule,
    //  StoreModule.provideStore({ 
    //   store:rootReducer})
   // DatepickerModule.forRoot()
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UserAuthenticationService,
    AuthenticateService,
     // providers used to create fake backend
       LoginAuthService,
        BaseRequestOptions,
        ShowHideService,
        MovieService,
        ChallengeService,
        AdminService,
        ChallengeHttpServiceMock
    ],
  bootstrap: [AppComponent],
 // exports:[DatepickerModule]
})
export class AppModule { }
