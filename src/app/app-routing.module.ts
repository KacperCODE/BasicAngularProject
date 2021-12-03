import { UsersOverviewComponent } from './+users/users-overview/users-overview.component';
import { ManageUserComponent } from './+users/manage-user/manage-user.component';
import { HomeComponent } from './+home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manage-user',
    component: ManageUserComponent
  },
  {
    path: 'overview',
    component: UsersOverviewComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
