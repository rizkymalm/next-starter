import { apiFetch } from '@/config/api';
import { loginUser } from '@/services/auth.service';
import { Dispatch } from '../types';

interface Props {
    data?: any;
    callback?: any;
}

export const postLoginUser =
    ({ data, callback }: Props) =>
    async (dispatch: Dispatch) => {
        dispatch({
            type: 'AUTH_LOADING',
        });
        try {
            const response = await loginUser(data);
            dispatch({
                type: 'AUTH_SUCCESS',
                payload: response.data,
            });
            callback();
        } catch (error: any) {
            if (error.response) {
                if (error.response.data.statusCode === 5000) {
                } else {
                    dispatch({
                        type: 'AUTH_ACTION_ERROR',
                        payload: error.response,
                    });
                }
            }
        }
    };
