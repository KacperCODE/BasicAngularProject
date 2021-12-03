import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UsersEffects } from './users/users.effects';
import { usersReducer } from './users/users.reducer';

export let STORE_DEV_TOOLS = [];

@NgModule({
  imports: [
    StoreModule.forRoot({
      users: usersReducer,
    }),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 500,
    }),
  ],
})
export class AppStoreModule {}
