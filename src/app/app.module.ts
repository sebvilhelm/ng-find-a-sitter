import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortalComponent } from './portal/portal.component';
import { BabyListComponent } from './portal/baby-list/baby-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterSitterComponent,
    RegisterBabyComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    PageNotFoundComponent,
    PortalComponent,
    BabyListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
