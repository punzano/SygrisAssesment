import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { userActions } from '../core/actions';

const SignUpPage = (props) => {
    // reset login status
    const { dispatch } = props;

    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.currentTarget[0].value;
        const password = e.currentTarget[1].value;

        if (username && password) {
            dispatch(userActions.signUp(username, password));
        }
    };

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Sign up form</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username"/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">Sign me up</button>
                </div>
            </form>
        </div>
    );
}

const connectedSignUpPage = connect()(SignUpPage);
export { connectedSignUpPage as SignUpPage }; 