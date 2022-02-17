import { userConstants } from '../constants';
import { userService } from '../services/user.service';
import { history } from '../helpers';

const success = (user, type) => ({ type: userConstants[`${type}_SUCCESS`], user });
const failure = (error, type) => ({ type: userConstants[`${type}_FAILURE`], error });

const login = (username, password) => {
    return dispatch => {
        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user, 'LOGIN'));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error, 'LOGIN'));
                }
            );
    };
}

const signUp = (username, password) => {
    return dispatch => {
        userService.signUp(username, password)
            .then(
                user => { 
                    dispatch(success(user, 'SIGNUP'));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error, 'SIGNUP'));
                }
            );
    };
};

const logout = () => {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

export const userActions = {
    login,
    signUp,
    logout,
};