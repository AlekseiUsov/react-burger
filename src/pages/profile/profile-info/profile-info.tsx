import styles from './profile-info.module.css'
import { useForm } from '../../../hooks/useForm'
import { Input, EmailInput, Button, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeUserData } from '../../../services/actions/routers/change-user-data';

type IFormProfile = {
    name: string;
    email: string;
    password: string;
};

const ProfileInfo = () => {
    const [isBottonsOpen, setIsBottonsOpen] = useState<boolean>(false);

    const user = useSelector((state: any) => state.auth.user)
    const { formValues, handleInputsChange, setFormValues } = useForm<IFormProfile>({ name: user.name, email: user.email, password: "", });

    const dispatch = useDispatch<any>();

    const cancelInput = () => {
        setFormValues({
            name: user.name,
            email: user.email,
            password: "",
        })
        setIsBottonsOpen(false)
    }

    const updateInputsValue = () => {
        dispatch(changeUserData(
            formValues.name,
            formValues.email,
            formValues.password
        ))
    }

    const changeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleInputsChange(e);
        setIsBottonsOpen(true)
    }

    return (
        <form onSubmit={updateInputsValue} className={`${styles.inputs} ml-15`}>
            <Input
                name="name"
                value={formValues.name}
                onChange={(e) => changeInputs(e)}
                placeholder={'Имя'}
                extraClass="mt-6"
                icon={'EditIcon'}
            />
            <EmailInput
                name="email"
                value={formValues.email}
                onChange={(e) => changeInputs(e)}
                placeholder={'e-mail'}
                extraClass="mt-6"
                isIcon
            />
            <PasswordInput
                name="password"
                value={formValues.password}
                onChange={(e) => changeInputs(e)}
                placeholder={'Пароль'}
                extraClass="mt-6"
                icon={'EditIcon'}
            />
            {isBottonsOpen &&
                <div className={`${styles.inner} mt-8`}>
                    <Button
                        onClick={cancelInput}
                        type="secondary"
                        htmlType="button"
                        size="medium"
                    >
                        Отмена
                    </Button>
                    <Button htmlType="submit" size="medium">
                        Coхранить
                    </Button>
                </div>
            }
        </form>
    )
}

export default ProfileInfo;