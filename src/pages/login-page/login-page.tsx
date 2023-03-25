import styles from './login-page.module.css';
import { userLogin } from '../../services/actions/routers/user-login'

import { EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { useDispatch } from '../../services/typesOfStoreAndThunk';
import { useForm } from '../../hooks/useForm';


export const LoginPage = () => {

    const { formValues, handleInputsChange } = useForm({ email: "", password: "", });


    const dispatch = useDispatch();

    const handleEmail = () => {
        dispatch(userLogin(formValues.email, formValues.password))
    }

    return (
        <div className={`${styles.wrapper} pl-2`}>
            <h1>Вход</h1>
            <form onSubmit={handleEmail} className={styles.form}>
                <EmailInput
                    name='email'
                    value={formValues.email}
                    onChange={e => handleInputsChange(e)}
                    placeholder={'Укажите e-mail'}
                    extraClass="mt-6"
                />
                <PasswordInput
                    name='password'
                    value={formValues.password}
                    onChange={e => handleInputsChange(e)}
                    placeholder={'Пароль'}
                    extraClass="mt-6"
                    icon={'ShowIcon'}
                />
                <Button htmlType="submit" disabled={!formValues.email} size="medium" extraClass="mt-6">Войти</Button>
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

