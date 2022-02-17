import { authHeader } from '../helpers';

const onResponse401 = response => {
    // auto logout if 401 response returned from api
    window.location.reload(true);
};

const onResponseError = (response, data) => {
    if (response.status === 401) {
        onResponse401();
    }

    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
};

const handleResponse = (response) => {
    console.log('response: ', response);
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            onResponseError(response, data);
        }

        return data;
    });
};

const getNodes = (username, password) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('http://20.71.175.9:8001/api/nodes', requestOptions).then(handleResponse)
};

const addNode = (nodeInfo) => {
    const requestOptions = {
        method: 'POST',
        headers: authHeader(),
        body: JSON.stringify(nodeInfo)
    };

    return fetch('http://20.71.175.9:8001/api/nodes/', requestOptions).then(handleResponse)
};

export const nodesService = {
    getNodes,
    addNode
};