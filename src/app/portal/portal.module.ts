import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';

import { BabyListComponent } from './baby-list/baby-list.component';
import { PortalComponent } from './portal.component';

@NgModule({
  imports: [
    CommonModule,
    PortalRoutingModule
  ],
  declarations: [
    PortalComponent,
    BabyListComponent
  ],
  bootstrap: [PortalComponent]
})
export class PortalModule { }
