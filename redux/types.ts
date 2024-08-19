interface Payload {
    data?: any;
    token?: string;
    id?: string | number;
}

interface Params {
    type: string;
    payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;

export type GetState = () => Reducers;

export interface Action {
    type: string;
    payload?: Payload;
}

export interface Reducers {
    auth: AuthState;
}

export interface AuthState {
    loading: boolean;
    isLogin: boolean;
    error: any;
    token: {
        accessToken: string;
        refreshToken: string;
    };
    profile: {
        loading: boolean;
        error: string;
        data: any;
    };
    actions?: {
        loading: boolean;
        error: any;
        type: 'success' | 'failed' | null;
        message: any;
    };
}