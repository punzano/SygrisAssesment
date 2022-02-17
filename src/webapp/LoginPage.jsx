import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../core/actions';

const LoginPage = (props) => {
    const { loggingIn, dispatch } = props;
    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = e.currentTarget[0].value;
        const password = e.currentTarget[1].value;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    };

    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Login</h2>
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
                    <button className="btn btn-primary">Login</button>
                    <Link to="/signup">Sign up</Link>
                    {loggingIn &&
                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                    }
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => ({ loggingIn: state.authentication.loggingIn });

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 