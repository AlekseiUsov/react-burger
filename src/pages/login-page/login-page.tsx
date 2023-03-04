import styles from './login-page.module.css';
import { userLogin } from '../../services/actions/routers/user-login'

import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch } from 'react-redux';


export const LoginPage = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useDispatch();

    const handleEmail = () => {
        dispatch<any>(userLogin(email, password))
    }

    return (
        <div className={`${styles.wrapper} pl-2`}>
            <h1>Вход</h1>
            <form onSubmit={handleEmail}>
                <EmailInput
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={'Укажите e-mail'}
                    extraClass="mt-6"
                />
                <PasswordInput
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={'Пароль'}
                    extraClass="mt-6"
                    icon={'ShowIcon'}
                />
                <Button htmlType="submit" disabled={!email} size="medium" extraClass="mt-6">Войти</Button>
            </form>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text} >Вы — новый пользователь?</p>
                    <Link to="/register" className={styles.link}>Зарегистрироваться</Link>
                </div>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text}>Забыли пароль?</p>
                    <Link to="/forgot-password" className={styles.link}>Восстановить пароль</Link>
                </div>
            </div>
        </div>
    )
}

