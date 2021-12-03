import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { initUsersState, UsersState } from './users.state';

export const usersReducer: ActionReducer<UsersState, Action> = createReducer(
  initUsersState,

  on(UsersActions.loadUsers, (state) => ({
    ...initUsersState,
    usersStatus: {
      ...initUsersState.usersStatus,
      loading: true,
    },
  })),

  on(UsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    usersStatus: {
      loading: false,
      loaded: true,
      error: null,
    },
  })),

  on(UsersActions.loadUsersError, (state, { error }) => ({
    ...state,
    usersStatus: {
      loading: false,
      loaded: true,
      error,
    },
  })),

  on(UsersActions.createUserLocaly, (state) => ({
    ...state,
    modifiedUser: null,
    editMode: false
  })),

  on(UsersActions.editUserLocaly, (state, { user }) => ({
    ...state,
    modifiedUser: user,
    editMode: true
  })),

  on(UsersActions.editUser, (state,) => ({
    ...initUsersState,
    manageUserStatus: {
      loading: true,
      error: null
    }
  })),

  on(UsersActions.editUserSuccess, (state,) => ({
    ...state,
    manageUserStatus: {
      loading: false,
      error: null
    }
  })),

  on(UsersActions.editUserError, (state, { error }) => ({
    ...state,
    manageUserStatus: {
      loading: false,
      error
    }
  })),

  on(UsersActions.createUser, (state,) => ({
    ...initUsersState,
    manageUserStatus: {
      loading: true,
      error: null
    }
  })),

  on(UsersActions.createUserSuccess, (state) => ({
    ...state,
    manageUserStatus: {
      loading: false,
      error: null
    }
  })),

  on(UsersActions.createUserError, (state, { error }) => ({
    ...state,
    manageUserStatus: {
      loading: false,
      error
    }
  }))
);
