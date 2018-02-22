import { BabyListComponent } from './baby-list/baby-list.component';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'baby',
        component: BabyListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
