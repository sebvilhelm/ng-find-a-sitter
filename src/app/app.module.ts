import { UsersService } from './users.service';
import { BabyItemComponent } from './baby-list/baby-item/baby-item.component';
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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BabyListComponent } from './baby-list/baby-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { IAppState, rootReducer, rootState } from './store/store';
import { UsersActions } from './users.actions';
import { RatingComponent } from './rating/rating.component';
import { HttpClientModule } from '@angular/common/http';

import { createEpicMiddleware, combineEpics } from "redux-observable";
import { createLogger } from 'redux-logger';
import { UsersEpic } from './users.epic';

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
    BabyItemComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    AdminGuardService,
    DataService,
    UsersActions,
    UsersService,
    UsersEpic
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,
    private usersEpic: UsersEpic
  ) {
    const rootEpic = combineEpics(
      // Each epic is referenced here.
      this.usersEpic.getUsers,
      this.usersEpic.addBaby,
      this.usersEpic.removeBaby,
    );

    let enhancers = [devTool.enhancer() ];  
    const middleware = [
      createEpicMiddleware(rootEpic), createLogger({ level: 'info', collapsed: true })
    ];
    this.ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      enhancers
    );

    ngReduxRouter.initialize(/* args */);
  }

}