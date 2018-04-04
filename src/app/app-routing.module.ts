import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';
import { AdminGuardService } from './admin-guard.service';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BabyListComponent } from './baby-list/baby-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'baby-list',
    component: BabyListComponent
  },
  {
    path: 'user-detail/:username',
    component: UserDetailComponent
  },
  {
    path: 'contact',
    canActivate: [AuthGuardService],
    component: ContactComponent
  },
  {
    path: 'portal',
    // canActivate: [AdminGuardService],
    loadChildren: './portal/portal.module#PortalModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
