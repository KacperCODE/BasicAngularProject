import { SharedModule } from './../shared/shared.module';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { UsersOverviewComponent } from './users-overview/users-overview.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    UsersOverviewComponent,
    ManageUserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
