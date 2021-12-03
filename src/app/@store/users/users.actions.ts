import { User } from '@api';
import { createAction, props } from '@ngrx/store';

export namespace UsersActions {
  export enum Type {
    LOAD_USERS = '[Users] Load Users',
    LOAD_USERS_SUCCESS = '[Users] Load Users Success',
    LOAD_USERS_ERROR = '[Users] Load Users Error',
    EDIT_USER_LOCALY = '[Users] Edit User Localy',
    CREATE_USER_LOCALY = '[Users] Create User Localy',
    EDIT_USER = '[Users] Edit User',
    EDIT_USER_SUCCESS = '[Users] Edit User Success',
    EDIT_USER_ERROR = '[Users] Edit User Error',
    CREATE_USER = '[Users] Create User',
    CREATE_USER_SUCCESS = '[Users] Create User Success',
    CREATE_USER_ERROR = '[Users] Create User Error',
  }

  export const loadUsers = createAction(Type.LOAD_USERS);

  export const loadUsersSuccess = createAction(
    Type.LOAD_USERS_SUCCESS,
    props<{
      users: User[];
    }>()
  );
  export const loadUsersError = createAction(
    Type.LOAD_USERS_ERROR,
    props<{
      error: any;
    }>()
  );
  export const editUserLocaly = createAction(
    Type.EDIT_USER_LOCALY,
    props<{
      user: User;
    }>()
  );
  export const createUserLocaly = createAction(Type.CREATE_USER_LOCALY);

  export const editUser = createAction(
    Type.EDIT_USER,
    props<{
      user: User;
    }>()
  );

  export const editUserSuccess = createAction(Type.EDIT_USER_SUCCESS);

  export const editUserError = createAction(Type.EDIT_USER_ERROR,
    props<{
      error: any;
    }>());

  export const createUser = createAction(
    Type.CREATE_USER,
    props<{
      user: User;
    }>()
  );

  export const createUserSuccess = createAction(Type.CREATE_USER_SUCCESS);

  export const createUserError = createAction(Type.CREATE_USER_ERROR,
    props<{
      error: any;
    }>());
}
