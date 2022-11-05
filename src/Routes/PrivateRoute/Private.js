import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider';

const Private = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation()
    if (loading) {
        return <div>Loading.....</div>
    }
    if (user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default Private;