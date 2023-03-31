import styles from './forgot-password-page.module.css';

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { forgotPassword } from '../../utils/burger-api';


export const ForgotPasswordPage = () => {
    const { formValues, handleInputsChange } = useForm({ email: "" });
    const navigate = useNavigate();

    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        forgotPassword(formValues.email)
        navigate('/reset-password', { state: { resetPassword: true } })
    }

    return (
        <form onSubmit={handleEmail} className={`${styles.wrapper} pl-2`}>
            <h1>Восстановление пароля</h1>
            <EmailInput
                name='email'
                value={formValues.email}
                onChange={handleInputsChange}
                placeholder={'Укажите e-mail'}
                extraClass="mt-6"
                isIcon={false}
            />
            <Button htmlType="submit" disabled={!formValues.email} size="medium" extraClass="mt-6">Воccтановить</Button>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text} >Вспонили пароль?</p>
                    <Link to="/login" className={styles.link}>Войти</Link>
                </div>
            </div>
        </form >
    )
}
