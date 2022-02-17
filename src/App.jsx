import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from './core/helpers';
import { PrivateRoute } from './router/PrivateRoute';
import { HomePage } from './webapp/HomePage';
import { LoginPage } from './webapp/LoginPage';
import { SignUpPage } from './webapp/SignUpPage';

const App = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-sm-8 col-sm-offset-2">
                    <BrowserRouter history={history}>
                        <Routes>
                            <Route exact path='/' 
                                element={
                                    <PrivateRoute>
                                        <HomePage />
                                    </PrivateRoute>
                                }>  
                            </Route>
                            <Route exact path="/login" element={<LoginPage/>} />
                            <Route exact path="/signUp" element={<SignUpPage/>} />
                        </Routes>
                    </BrowserRouter >
                </div>
            </div>
        </div>
    );
};

const connectedApp = connect()(App);
export { connectedApp as App }; 