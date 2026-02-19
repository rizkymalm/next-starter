import { apiFetch } from '@/config/api';
import { Dispatch } from '../types';

interface Props {
    data?: any;
    callback?: any;
}

export const postVisitors = async ({ callback }: Props) => {
    try {
        await apiFetch({
            endpoint: '/visitors',
            method: 'POST',
        });
        callback();
    } catch (error: any) {
        if (error.response) {
            if (error.response.data.statusCode === 5000) {
            } else {
            }
        }
    }
};
