export interface User {
    id: number;
    username: string;
    description: string;
}

export interface GetUserParams {
    id: number;
}

export interface AddUserPayload {
    username: string;
    description: string
}

export interface UpdateUserPayload {
    id: number,
    body: {
        description: string
    }
}