import { DataService } from './data.service';
import { AdminGuardService } from './admin-guard.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { PortalModule } from './portal/portal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
