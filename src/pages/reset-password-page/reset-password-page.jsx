import styles from './reset-password-page.module.css';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { resetPassword } from '../../services/actions/routers/reset-password'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmail = (mail) => {
        if (password === '' || token === '') {
            return;
        } else {
            dispatch(resetPassword(password, token))
        }
    }

    console.log(password, token)

    return (
        <div className={`${styles.wrapper} pl-2`}>
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
            <Button onClick={handleEmail} htmlType="button" size="medium" extraClass="mt-6">Сохранить</Button>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text} >Вспонили пароль?</p>
                    <Link to="/login" className={styles.link}>Войти</Link>
                </div>
            </div>
        </div >
    )
}

