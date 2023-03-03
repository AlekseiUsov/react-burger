import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, FC } from 'react';

interface IUnProtectedRouteElement {
    element: React.ReactElement
}

export const UnProtectedRouteElement: FC<IUnProtectedRouteElement> = ({ element }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, user: { isLogedIn } } = useSelector((state: any) => state.auth);

    useEffect(() => {
        dispatch<any>(getUserData())
    }, [dispatch]);

    if (isLoading) return <h1>Пожайлуста, подождите ...</h1>
    if (!isLoading && isLogedIn) return <Navigate to={location.state?.path || '/'} replace />
    return element;
}
