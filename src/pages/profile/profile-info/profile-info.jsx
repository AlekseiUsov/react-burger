import styles from './profile-info.module.css'

import { Input, EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { changeUserData } from '../../../services/actions/routers/change-user-data';

const ProfileInfo = () => {
    const { email, name } = useSelector((state) => state.auth.user)

    const [newName, setName] = useState(name)
    const [newEmail, setEmail] = useState(email)
    const [newPassword, setPassword] = useState('');

    const cancelInput = () => {
        setName(name)
        setEmail(email)
        setPassword('')
    }

    const dispatch = useDispatch();

    const updateInputsValue = () => {
        dispatch(changeUserData(newName, newEmail, newPassword))
    }


    return (
        <div className={`${styles.inputs} ml-15`}>
            <Input
                value={newName}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Имя'}
                extraClass="mt-6"
                icon={'EditIcon'}
            />
            <EmailInput
                value={newEmail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={'e-mail'}
                extraClass="mt-6"
                icon={'EditIcon'}
            />
            <Input
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={'Пароль'}
                extraClass="mt-6"
                icon={'EditIcon'}
            />
            <div className={`${styles.inner} mt-8`}>
                <Button
                    onClick={() => cancelInput()}
                    type="secondary"
                    htmlType="button"
                    size="medium"
                >
                    Отмена
                </Button>
                <Button onClick={() => updateInputsValue()} htmlType="button" size="medium">
                    Coхранить
                </Button>
            </div>
        </div>
    )
}

export default ProfileInfo;