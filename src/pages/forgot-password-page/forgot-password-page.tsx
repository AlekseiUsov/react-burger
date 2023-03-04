import styles from './forgot-password-page.module.css';
import { forgotPassword } from '../../services/actions/routers/forgot-password'

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";


export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmail = () => {
        dispatch<any>(forgotPassword(email))
        navigate('/reset-password', { state: { resetPassword: true } })
    }

    return (
        <form onSubmit={handleEmail} className={`${styles.wrapper} pl-2`}>
            <h1>Восстановление пароля</h1>
            <EmailInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={'Укажите e-mail'}
                extraClass="mt-6"
                isIcon={false}
            />
            <Button htmlType="submit" disabled={!email} size="medium" extraClass="mt-6">Воccтановить</Button>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text} >Вспонили пароль?</p>
                    <Link to="/login" className={styles.link}>Войти</Link>
                </div>
            </div>
        </form >
    )
}
