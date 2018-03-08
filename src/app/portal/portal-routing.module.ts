import { BabyListComponent } from './baby-list/baby-list.component';
import { PortalComponent } from './portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: 'baby-list',
        component: BabyListComponent
      },
      {
        path: 'user-detail/:username',
        component: UserDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
