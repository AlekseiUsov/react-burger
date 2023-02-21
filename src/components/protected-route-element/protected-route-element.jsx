import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';

import { useEffect } from 'react';


export const ProtectedRouteElement = ({ element }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, hasError, user: { isLogedIn } } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch]);

    if (isLoading) return <h1>Пожайлуста, подождите ...</h1>
    if (hasError || (!isLoading && !isLogedIn)) return <Navigate to="/login" state={{ path: location }} replace />
    return element;
}

ProtectedRouteElement.propTypes = {
    element: PropTypes.element,
};