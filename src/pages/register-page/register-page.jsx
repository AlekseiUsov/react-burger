import styles from './register-page.module.css';
import { userRegistration } from '../../services/actions/routers/user-registration'

import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmail = () => {
        if (email === '' || name === '' || password === '') {
            return;
        } else {
            dispatch(userRegistration(email, name, password))
            navigate('/')
        }
    }

    return (
        <div className={`${styles.wrapper} pl-2`}>
            <h1>Регистрация</h1>
            <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={'Имя'}
                extraClass="mt-6"
            />
            <EmailInput
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={'Укажите e-mail'}
                extraClass="mt-6"
            />
            <Input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={'Пароль'}
                extraClass="mt-6"
                icon={'ShowIcon'}
            />
            <Button onClick={handleEmail} htmlType="button" size="medium" extraClass="mt-6">Войти</Button>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text}>Уже зарегистрированы?</p>
                    <Link to="/login" className={styles.link}>Войти</Link>
                </div>
            </div>
        </div >
    )
}


