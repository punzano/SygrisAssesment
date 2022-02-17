const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
};

const onResponse401 = response => {
    // auto logout if 401 response returned from api
    logout();
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
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            onResponseError(response, data);
        }

        return data;
    });
};

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginname: username, password })
    };

    return fetch('http://20.71.175.9:8001/api/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
};

const signUp = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginname: username, password })
    };

    return fetch('http://20.71.175.9:8001/api/createLogin', requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
};

export const userService = {
    login,
    signUp,
    logout,
};