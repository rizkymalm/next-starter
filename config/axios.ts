import axios from 'axios';

interface Props {
    url: string;
    params?: any;
    data?: any;
    token?: string;
    timeStamp?: number;
    apiKey?: string;
    cancelToken?: any;
}

type GetProps = Omit<Props, 'datas'>;

const queryParser = (params: any) => {
    let queryParams = '';
    if (params) {
        Object.keys(params).forEach(key => {
            if (!queryParams) {
                queryParams += `?${key}=${params[key]}`;
            } else {
                queryParams += `&${key}=${params[key]}`;
            }
        });
    }
    return queryParams;
};

const timeoutStandard = 200000;

const defaultHeaders = {
    'Content-Type': 'application/json',
};

const Axios = {
    Get: ({ url, params, token, cancelToken, timeStamp, apiKey }: GetProps) => {
        return new Promise((resolve, reject) => {
            axios
                .request({
                    url: url + queryParser(params),
                    method: 'GET',
                    timeout: timeoutStandard,
                    headers: {
                        ...defaultHeaders,
                        'x-timestamp': timeStamp,
                        Authorization: `Bearer ${token}`,
                        'x-api-key': apiKey,
                    },
                    cancelToken,
                })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        reject(error);
                    } else {
                        reject(error);
                    }
                });
        });
    },
    Post: ({ url, data, token, cancelToken, timeStamp, apiKey }: GetProps) => {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data, {
                    timeout: timeoutStandard,
                    headers: {
                        ...defaultHeaders,
                        'x-timestamp': timeStamp,
                        Authorization: `Bearer ${token}`,
                        'x-api-key': apiKey,
                    },
                    cancelToken,
                })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        reject(error);
                    } else {
                        reject(error);
                    }
                });
        });
    },
    PostFormData: ({ url, data, token, timeStamp, apiKey }: GetProps) => {
        return new Promise((resolve, reject) => {
            axios
                .post(url, data, {
                    timeout: timeoutStandard,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'x-timestamp': timeStamp,
                        Authorization: `Bearer ${token}`,
                        'x-api-key': apiKey,
                    },
                })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        reject(error);
                    } else {
                        reject(error);
                    }
                });
        });
    },

    Put: ({
        url,
        params,
        data,
        token,
        cancelToken,
        timeStamp,
        apiKey,
    }: GetProps) => {
        return new Promise((resolve, reject) => {
            axios
                .request({
                    url: url + queryParser(params),
                    method: 'PUT',
                    timeout: timeoutStandard,
                    headers: {
                        ...defaultHeaders,
                        'x-timestamp': timeStamp,
                        Authorization: `Bearer ${token}`,
                        'x-api-key': apiKey,
                    },
                    cancelToken,
                    data,
                })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        reject(error);
                    } else {
                        reject(error);
                    }
                });
        });
    },
    Patch: ({
        url,
        params,
        data,
        token,
        cancelToken,
        timeStamp,
        apiKey,
    }: GetProps) => {
        return new Promise((resolve, reject) => {
            axios
                .request({
                    url: url + queryParser(params),
                    method: 'PATCH',
                    timeout: timeoutStandard,
                    headers: {
                        ...defaultHeaders,
                        'x-timestamp': timeStamp,
                        Authorization: `Bearer ${token}`,
                        'x-api-key': apiKey,
                    },
                    cancelToken,
                    data,
                })
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        reject(error);
                    } else {
                        reject(error);
                    }
                });
        });
    },
    Delete: ({
        url,
        params,
        token,
        cancelToken,
        timeStamp,
        apiKey,
    }: GetProps) => {
        return new Promise((resolve, reject) => {
            axios
                .request({
                    url: url + queryParser(params),
                    method: 'DELETE',
                    timeout: timeoutStandard,
                    headers: {
                        ...defaultHeaders,
                        'x-timestamp': timeStamp,
                        Authorization: `Bearer ${token}`,
                        'x-api-key': apiKey,
                    },
                    cancelToken,
                })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    if (axios.isCancel(error)) {
                        reject(error);
                    } else {
                        reject(error);
                    }
                });
        });
    },
    All: ({ promises }: any) => {
        return new Promise((resolve, reject) => {
            axios
                .all(promises)
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    },
};

export default Axios;
