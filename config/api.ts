type RequestOptions = {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    endpoint: string;
    data?: any;
    params?: Record<string, string>;
    token?: string;
    headers?: Record<string, string>;
};

const BASE_URL = process.env.API_BASE_URL;
const API_KEY = process.env.API_KEY;

export async function apiFetch({
    method = 'GET',
    endpoint,
    data,
    params,
    token,
    headers = {},
}: RequestOptions) {
    const queryString = params
        ? '?' + new URLSearchParams(params).toString()
        : '';

    const response = await fetch(`${BASE_URL}${endpoint}${queryString}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY || '',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...headers,
        },
        body: data ? JSON.stringify(data) : undefined,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || 'Something went wrong');
    }

    return response.json();
}
