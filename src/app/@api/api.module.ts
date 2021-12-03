import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiConfig } from './api.model';
import { HttpClientModule } from '@angular/common/http';
import { API_CONFIG } from './api.service';
import { UsersApi } from './users/users.api';



@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [HttpClientModule],
})
export class ApiModule {
  static forRoot(config: ApiConfig): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: API_CONFIG,
          useValue: config,
        },
        UsersApi
      ],
    };
  }
}
