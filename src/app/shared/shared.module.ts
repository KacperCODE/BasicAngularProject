import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { FullscreenBackgroundComponent } from './fullscreen-background/fullscreen-background.component';
import { SnackbarService } from './snackbar/snackbar.service';



@NgModule({
  declarations: [
    LoaderComponent,
    FullscreenBackgroundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FullscreenBackgroundComponent,
    MaterialModule,
    LoaderComponent,
  ],
  providers: [
    SnackbarService
  ]
})
export class SharedModule { }
