import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../backend/authen';
import { MoviesComponent } from '../movies/movies.component';
import { AdminComponent } from '../admin/admin.component';
import { MemberComponent } from '../member/member.component';
import { CoordinatorComponent } from '../coordinator/coordinator.component';
const routes: Routes = [
//full : makes sure the path is absolute path
    { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'member', component: MemberComponent },
    { path: 'challengeCoordinator', component: CoordinatorComponent },
     { path: 'movie', component: MoviesComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApprouteRoutingModule { }
