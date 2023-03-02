import styles from './reset-password-page.module.css';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { resetPassword } from '../../services/actions/routers/reset-password'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

export const ResetPasswordPage = () => {
    const [password, setPassword] = useState<string>('');
    const [token, setToken] = useState<string>('')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleEmail = () => {
        dispatch<any>(resetPassword(password, token))
    }

    useEffect(() => {
        if (!location.state?.resetPassword) {
            navigate('/forgot-password', { state: { resetPassword: false } })
        }

    }, [location.state, navigate])


    return (
        <form onSubmit={handleEmail} className={`${styles.wrapper} pl-2`}>
            <h1>Восстановление пароля</h1>
            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={'Введите новый пароль'}
                extraClass="mt-6"
                icon={'ShowIcon'}
            />
            <Input
                value={token}
                onChange={e => setToken(e.target.value)}
                placeholder={'Введите код из письма'}
                extraClass="mt-6"
            />
            <Button
                disabled={!token || !password}
                htmlType="submit" size="medium" extraClass="mt-6"
            >Сохранить</Button>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text} >Вспонили пароль?</p>
                    <Link to="/login" className={styles.link}>Войти</Link>
                </div>
            </div>
        </form >
    )
}

