import styles from './reset-password-page.module.css';

import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { passwordRecovery } from '../../utils/burger-api';

export const ResetPasswordPage = () => {
    const { formValues, handleInputsChange } = useForm({ password: "", token: "", });

    const navigate = useNavigate();
    const location = useLocation();
    console.log((!location.state?.resetPassword))

    const handleEmail = (e: React.FormEvent) => {
        e.preventDefault()
        passwordRecovery(formValues.password, formValues.token)
            .then(res => {
                if (res && res.success) {
                    navigate('/login')
                }
            }).catch((err) => console.log(err))
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
                name='password'
                value={formValues.password}
                onChange={(e) => handleInputsChange(e)}
                placeholder={'Введите новый пароль'}
                extraClass="mt-6"
                icon={'ShowIcon'}
            />
            <Input
                name='token'
                value={formValues.token}
                onChange={(e) => handleInputsChange(e)}
                placeholder={'Введите код из письма'}
                extraClass="mt-6"
            />
            <Button
                disabled={!formValues.token || !formValues.password}
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

