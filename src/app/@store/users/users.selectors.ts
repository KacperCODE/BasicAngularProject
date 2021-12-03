import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UsersState } from './users.state';

export namespace UsersSelectors {
  const users = (state: AppState): UsersState => state.users;

  export const getUsersLoaded = createSelector(
    users,
    (state: UsersState): any => state.usersStatus.loaded
  );

  export const getUsers = createSelector(
    users,
    (state: UsersState): any => state.users
  );

  export const getModifiedUser = createSelector(
    users,
    (state: UsersState): any => state.modifiedUser
  );

  export const getUsersErrorPresent = createSelector(
    users,
    (state: UsersState): any => !!state.usersStatus.error
  );

  export const getIsEditMode = createSelector(
    users,
    (state: UsersState): any => !!state.editMode
  );
  
  export const getManageUserLoading = createSelector(
    users,
    (state: UsersState): any => state.manageUser.loading
  );
}
