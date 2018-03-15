import { BabyItemComponent } from './portal/baby-list/baby-item/baby-item.component';
import { DataService } from './data.service';
import { AdminGuardService } from './admin-guard.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { PortalModule } from './portal/portal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BabyListComponent } from './portal/baby-list/baby-list.component';
import { UserDetailComponent } from './portal/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    BabyListComponent,
    UserDetailComponent,
    BabyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    AdminGuardService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
