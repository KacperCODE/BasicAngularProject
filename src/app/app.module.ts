import { HomeModule } from './+home/home.module';
import { NavigationModule } from './+navigation/navigation.module';
import { UsersModule } from './+users/users.module';
import { SharedModule } from './shared/shared.module';
import { AppStoreModule } from '@store';
import { ApiModule } from '@api';

import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule.forRoot(environment.apiConfig),
    AppStoreModule,
    SharedModule,
    BrowserAnimationsModule,
    UsersModule,
    NavigationModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
