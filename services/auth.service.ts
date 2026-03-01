import { apiFetch } from '@/config/api';

export async function loginUser(data: any) {
    const response = await apiFetch({
        endpoint: '/auth/login',
        method: 'POST',
        data,
    });
    return response;
}
