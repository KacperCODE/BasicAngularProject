import { User } from "@api"

export interface UsersState {
    users: User[],
    editMode: boolean,
    modifiedUser: User | null,
    usersStatus: {
        loaded: boolean,
        loading: boolean
        error: any;
    },
    manageUser: {
        loading: boolean
        error: any;
    }
}

export const initUsersState: UsersState = {
    users: [],
    editMode: false,
    modifiedUser: null,
    usersStatus: {
        loaded: false,
        loading: false,
        error: null
    },
    manageUser: {
        loading: false,
        error: null
    }
}
