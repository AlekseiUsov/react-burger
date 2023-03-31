import styles from './profile.module.css';

import ProfileLink from './profile-link/profile-link'
import { Outlet } from 'react-router-dom';
import { userLogout } from '../../services/actions/routers/user-logout'

import { useDispatch } from '../../services/typesOfStoreAndThunk'

export const ProfilePage = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(userLogout())
    }

    return (
        <div>
            <div className={`${styles.wrapper} pl-2`}>
                <div className={styles.menu}>
                    <ProfileLink
                        path='/profile'
                        text="Профиль"
                    />
                    <ProfileLink
                        path='/profile/orders'
                        text="История заказов"
                    />
                    <button className={styles.button}
                        onClick={logOut}
                    > Выход</button>
                    <p className={`${styles.text} mt-30`}>
                        В этом разделе вы можете
                        <br />
                        изменить свои персональные данные
                    </p>
                </div>
                <Outlet />
            </div>
        </div >
    )
}

