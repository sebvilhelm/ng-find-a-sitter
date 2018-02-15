import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterSitterComponent } from './register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './register-baby/register-baby.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterSitterComponent,
    RegisterBabyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
