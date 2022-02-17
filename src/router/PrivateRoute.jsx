import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children, location }) => (
    localStorage.getItem('user')
            ? children
            : <Navigate to='/login' state={{ from: location }} />
);