import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';

import { BabyListComponent } from './baby-list/baby-list.component';
import { PortalComponent } from './portal.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    // BabyListComponent,
    PortalComponent,
    // UserDetailComponent,
  ],
  providers: [DataService]
})
export class PortalModule { }
