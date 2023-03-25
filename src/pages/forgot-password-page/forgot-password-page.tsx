import styles from './forgot-password-page.module.css';
import { forgotPassword } from '../../services/actions/routers/forgot-password'

import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useDispatch } from '../../services/typesOfStoreAndThunk';
import { useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';


export const ForgotPasswordPage = () => {
    const { formValues, handleInputsChange } = useForm({ email: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEmail = () => {
        dispatch(forgotPassword(formValues.email))
        navigate('/reset-password', { state: { resetPassword: true } })
    }

    return (
        <form onSubmit={handleEmail} className={`${styles.wrapper} pl-2`}>
            <h1>Восстановление пароля</h1>
            <EmailInput
                name='email'
                value={formValues.email}
                onChange={e => handleInputsChange(e)}
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
