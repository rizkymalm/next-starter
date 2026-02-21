import { apiFetch } from '@/config/api';

interface Props {
    data?: any;
    callback?: any;
}

export const postVisitors = async ({ data, callback }: Props) => {
    try {
        await apiFetch({
            endpoint: '/visitors',
            method: 'POST',
            data
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
