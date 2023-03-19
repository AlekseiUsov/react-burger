import { RootState, useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, FC } from 'react';

interface IUnProtectedRouteElement {
    element: React.ReactElement
}

export const UnProtectedRouteElement: FC<IUnProtectedRouteElement> = ({ element }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, user: { isLogedIn } } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch]);

    if (isLoading) return <h1>Пожайлуста, подождите ...</h1>
    if (!isLoading && isLogedIn) return <Navigate to={location.state?.path || '/'} replace />
    return element;
}
