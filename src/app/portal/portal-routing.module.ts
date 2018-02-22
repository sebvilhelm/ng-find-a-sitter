import { BabyListComponent } from './baby-list/baby-list.component';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: 'index',
    component: PortalComponent,
    
    children: [
      {
        path: 'test',
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
