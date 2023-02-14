import styles from './profile.module.css';
import { getUserData } from '../../services/actions/routers/get-profile-data'

import ProfileLink from './profile-link/profile-link'
import { Input, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export const ProfilePage = () => {
    const dispatch = useDispatch();
    const { email, name, isLoading } = useSelector(state => state.router.user);
    const [active, setActive] = useState('Профиль');

    const [newName, setName] = useState(name);
    const [newEmail, setEmail] = useState(email);
    const [newPassword, setPassword] = useState('');


    const init = useCallback(() => {
        dispatch(getUserData())
    }, [dispatch])


    useEffect(() => {
        init()
    }, [init]);

    return (
        <div>
            {isLoading ? (
                <h1>Пожайлуста, подождите ...</h1>
            ) : email && name && (
                <div className={`${styles.wrapper} pl-2`}>
                    <div className={styles.menu}>
                        <NavLink to={'/profile'} style={{ textDecoration: 'none' }}>
                            <ProfileLink
                                text="Профиль"
                                isActive={active === 'Профиль'}
                                onClick={() => setActive('Профиль')}
                            />
                        </NavLink>
                        <NavLink to={'/profile/orders'} style={{ textDecoration: 'none' }}>
                            <ProfileLink
                                text="История заказов"
                                isActive={active === 'История заказов'}
                                onClick={() => setActive('История заказов')}
                            />
                        </NavLink>
                        <NavLink to={'/profile'} style={{ textDecoration: 'none' }}>
                            <ProfileLink
                                text="Выход"
                                isActive={active === 'Выход'}
                                onClick={() => setActive('Выход')}
                            />
                        </NavLink>
                        <p className={`${styles.text} mt-30`}>В этом разделе вы можете<br />изменить свои персональные данные</p>
                    </div>
                    <div className={`${styles.inputs} ml-15`}>
                        <Input
                            value={newName}
                            onChange={e => setName(e.target.value)}
                            placeholder={'Имя'}
                            extraClass="mt-6"
                            icon={'EditIcon'}
                        />
                        <EmailInput
                            value={newEmail}
                            onChange={e => setEmail(e.target.value)}
                            placeholder={'e-mail'}
                            extraClass="mt-6"
                            icon={'EditIcon'}
                        />
                        <Input
                            value={newPassword}
                            onChange={e => setPassword(e.target.value)}
                            placeholder={'Пароль'}
                            extraClass="mt-6"
                            icon={'EditIcon'}
                        />
                        <div className={`${styles.inner} mt-8`}>
                            <Button onClick={e => e} type="secondary" htmlType="button" size="medium">Отмена</Button>
                            <Button onClick={e => e} htmlType="button" size="medium">Coхранить</Button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}

