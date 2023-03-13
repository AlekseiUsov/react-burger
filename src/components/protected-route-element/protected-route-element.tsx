import { useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';
import { RootState } from '../../services/typesOfStoreAndThunk'
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, FC } from 'react';

interface IProtectedRouteElement {
    element: React.ReactElement
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, hasError, user: { isLogedIn } } = useSelector((store: RootState) => store.auth);

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch]);

    if (isLoading) return <h1>Пожайлуста, подождите ...</h1>
    if (hasError || (!isLoading && !isLogedIn)) return <Navigate to="/login" state={{ path: location }} replace />
    return element;
}


