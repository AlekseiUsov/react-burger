import styles from './register-page.module.css';
import { userRegistration } from '../../services/actions/routers/user-registration'
import { useForm } from '../../hooks/useForm'

import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';


export const RegisterPage = () => {
    const { formValues, handleInputsChange } = useForm({ name: "", email: "", password: "", });

    const dispatch = useDispatch();

    const handleEmail = () => {
        dispatch<any>(userRegistration(formValues))
    }

    return (
        <form onSubmit={handleEmail} className={`${styles.wrapper} pl-2`}>
            <h1>Регистрация</h1>
            <Input
                name="name"
                value={formValues.name}
                onChange={(e) => handleInputsChange(e)}
                placeholder={'Имя'}
                extraClass="mt-6"
            />
            <EmailInput
                name="email"
                value={formValues.email}
                onChange={(e) => handleInputsChange(e)}
                placeholder={'Укажите e-mail'}
                extraClass="mt-6"
            />
            <PasswordInput
                name="password"
                value={formValues.password}
                onChange={(e) => handleInputsChange(e)}
                placeholder={'Пароль'}
                extraClass="mt-6"
                icon={'ShowIcon'}
            />
            <Button
                disabled={!formValues.name || !formValues.email || !formValues.password}
                htmlType="submit" size="medium" extraClass="mt-6"
            >Войти</Button>
            <div className={styles.block}>
                <div className={`${styles.inner} mt-4`} >
                    <p className={styles.text}>Уже зарегистрированы?</p>
                    <Link to="/login" className={styles.link}>Войти</Link>
                </div>
            </div>
        </form >
    )
}


