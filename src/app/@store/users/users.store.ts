import { UsersState } from './users.state';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { UsersSelectors } from './users.selectors';
import { UsersActions } from './users.actions';
import { User } from '@api';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersStore {
  usersLoaded$ = this.store$.pipe(select(UsersSelectors.getUsersLoaded));
  users$ = this.store$.pipe(select(UsersSelectors.getUsers));
  usersErrorPresent$ = this.store$.pipe(
    select(UsersSelectors.getUsersErrorPresent)
  );
  editMode$ = this.store$.pipe(select(UsersSelectors.getIsEditMode));
  modifiedUser$ = this.store$.pipe(select(UsersSelectors.getModifiedUser));
  manageUserLoading$ = this.store$.pipe(select(UsersSelectors.getManageUserLoading));

  constructor(private store$: Store<AppState>) {}

  loadUsers(): void {
    this.store$.dispatch(UsersActions.loadUsers());
  }

  editUserLocaly(user: User): void {
    this.store$.dispatch(UsersActions.editUserLocaly({ user }));
  }

  createUserLocaly(): void {
    this.store$.dispatch(UsersActions.createUserLocaly());
  }

  editUser(user: User): void {
    this.store$.dispatch(UsersActions.editUser({ user }));
  }

  createUser(user: User): void {
    this.store$.dispatch(UsersActions.createUser({ user }));
  }

  submitUser(user: User): void {
    this.editMode$.pipe(take(1)).subscribe((isEditMode) => {
      if (isEditMode) {
        this.editUser(user);
      } else {
        this.createUser(user);
      }
    });
  }
}
