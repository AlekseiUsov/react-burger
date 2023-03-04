import styles from './profile.module.css';

import ProfileLink from './profile-link/profile-link'
import { Outlet } from 'react-router-dom';
import { userLogout } from '../../services/actions/routers/user-logout'

import { useDispatch } from 'react-redux'

export const ProfilePage = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch<any>(userLogout())
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
                    <ProfileLink
                        path='/login'
                        text="Выход"
                        onClick={logOut}
                    />
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

