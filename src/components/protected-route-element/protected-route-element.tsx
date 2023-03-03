import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../services/actions/routers/get-profile-data';
import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, FC } from 'react';

interface IProtectedRouteElement {
    element: React.ReactElement
}

export const ProtectedRouteElement: FC<IProtectedRouteElement> = ({ element }) => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { isLoading, hasError, user: { isLogedIn } } = useSelector((state: any) => state.auth);

    useEffect(() => {
        dispatch<any>(getUserData())
    }, [dispatch]);

    if (isLoading) return <h1>Пожайлуста, подождите ...</h1>
    if (hasError || (!isLoading && !isLogedIn)) return <Navigate to="/login" state={{ path: location }} replace />
    return element;
}


// const ProtectedRoute = ({onlyUnAuth = false, children}) => {
//     const authChecked = useSelector(store => store.auth.authChecked);
//     const user = useSelector(store => store.auth.user);
//     const location = useLocation();

//     if (!authChecked) {
//         // Запрос еще выполняется
//         return null; // или прелоадер
//     }

//     if (onlyUnAuth && user) {
//         // Пользователь авторизован, но запрос предназначен только для неавторизованных пользователей
//         // Нужно сделать редирект на главную страницу или на тот адрес, что записан в location.state.from
//     }


//     if (!onlyUnAuth && !user) {
//         // Сервер не ответил
//         return <Navigate to="/login" state={{ from: location }} />;
//     }

//     // !onlyUnAuth && user

//     return children;
// }