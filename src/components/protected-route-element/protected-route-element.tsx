import { useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, FC } from 'react';

interface IProtectedRouteElement {
    element: React.ReactElement,
    unAuth?: boolean
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element, unAuth = false }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, user: { isLogedIn } } = useSelector((store) => store.auth);

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch]);

    if (isLoading) return <h1 style={{ textAlign: 'center' }}>Пожайлуста, подождите ...</h1>

    if (unAuth && isLogedIn) return <Navigate to={location.state?.path || '/'} replace />

    if (!unAuth && !isLogedIn) return <Navigate to={location.state?.path || '/login'} state={{ path: location }} replace />

    return element;
}


