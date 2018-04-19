import { DataService } from './../data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';

import { PortalComponent } from './portal.component';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PortalComponent,
  ],
  providers: [DataService]
})
export class PortalModule { }
