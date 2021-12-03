import { Router } from '@angular/router';
import { SnackbarService } from './../../shared/snackbar/snackbar.service';
import { UsersApi } from './../../@api/users/users.api';
import { Injectable } from '@angular/core';
import { User } from '@api';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  switchMap,
  throttleTime,
} from 'rxjs/operators';
import { UsersActions } from './users.actions';

@Injectable()
export class UsersEffects {
  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      debounceTime(1500),
      switchMap((action) => {
        return this.usersApi.getUsers().pipe(
          map((users: User[]) => {
            return UsersActions.loadUsersSuccess({ users });
          }),
          catchError((error) => of(UsersActions.loadUsersError({ error })))
        );
      })
    )
  );

  createUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.createUser),
      switchMap((action) => {
        return this.usersApi
          .addUser({
            username: action.user.username,
            description: action.user.description,
          })
          .pipe(
            map((users: User) => {
              this.snackbarService.showSnackbar(
                '🎉 User created successfully!'
              );
              this.router.navigate(['/overview']);
              return UsersActions.createUserSuccess();
            }),
            catchError((error) => {
              this.snackbarService.showSnackbar(
                '❌ Failed to create new User!'
              );
              return of(UsersActions.createUserError({ error }));
            })
          );
      })
    )
  );

  editUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.editUser),
      switchMap((action) => {
        return this.usersApi
          .updateUser({
            id: action.user.id,
            body: { description: action.user.description },
          })
          .pipe(
            map((users: User) => {
              this.snackbarService.showSnackbar('🎉 User edited successfully!');
              this.router.navigate(['/overview']);
              return UsersActions.editUserSuccess();
            }),
            catchError((error) => {
              this.snackbarService.showSnackbar(
                `❌ Failed to edit user ${action.user.username}!`
              );
              return of(UsersActions.editUserError({ error }));
            })
          );
      })
    )
  );
  constructor(
    private actions$: Actions,
    private usersApi: UsersApi,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}
}
