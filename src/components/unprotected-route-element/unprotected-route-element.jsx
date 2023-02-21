import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';

import { useEffect } from 'react';


export const UnProtectedRouteElement = ({ element }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, user: { isLogedIn } } = useSelector(state => state.auth);


    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch]);


    if (isLoading) return <h1>Пожайлуста, подождите ...</h1>
    if (!isLoading && isLogedIn) return <Navigate to={location.state?.path || '/'} replace />
    return element;
}

UnProtectedRouteElement.propTypes = {
    element: PropTypes.element,
};