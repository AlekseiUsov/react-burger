import { useSelector } from '../../services/typesOfStoreAndThunk';
import { Navigate, useLocation } from 'react-router-dom'
import { FC } from 'react';

interface IProtectedRouteElement {
    element: React.ReactElement,
    unAuth?: boolean
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element, unAuth = false }) => {
    const location = useLocation();

    const { isUserDataLoaded, isLogedIn } = useSelector((store) => store.auth);

    if (!isUserDataLoaded) return <h1 style={{ textAlign: 'center' }}>Пожайлуста, подождите ...</h1>

    if (!unAuth && !isLogedIn) return <Navigate to='/login' state={{ path: location }} replace />

    if (unAuth && isLogedIn) return <Navigate to={location.state?.path || '/'} replace />

    return element;
}


