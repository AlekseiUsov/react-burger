import styles from './burger-constructor-total.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { FC } from 'react';
import { ICardTypes } from '../../utils/propsType';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderDetails } from '../../services/actions/order';

interface IBurgerConstructorTotal {
    icon: React.ReactElement;
    text: string;
}
const BurgerConstructorTotal: FC<IBurgerConstructorTotal> = ({ text, icon }) => {
    const [isPopUpOpen, setIsPopUpOpen] = React.useState<boolean>(false);

    const { bun, constructorIngridients } = useSelector((state: any) => state.burgerConstrucor);
    const user = useSelector((state: any) => state.auth.user);

    const ingridientsIds = (constructorIngridients).map((ingridient: ICardTypes) => ingridient._id);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const getOrder = () => {
        if (bun === null || ingridientsIds.length === 0) {
            setIsPopUpOpen(true)
            setTimeout(() => setIsPopUpOpen(false), 3000)
        } else {
            if (user.isLogedIn) {
                navigate('/order', { state: { background: location } })
                dispatch<any>(getOrderDetails([bun._id, ...ingridientsIds, bun._id]))
            } else {
                navigate('/login')
            }
        }
    }


    return (
        <>
            <div className={`${styles.wrapper} pt-10 mr-10`}>
                {isPopUpOpen &&
                    <p className={styles.popUp}>Выберите булки и хотя бы 1 ингридиент</p>
                }
                <div className={`${styles.counter} mr-10`} >
                    <span className={`${styles.text}`} >{text}</span>
                    <span className={`${styles.icon}`}>{icon}</span>
                </div>
                <Button onClick={() => getOrder()}
                    htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div >
        </>
    )
}

export default BurgerConstructorTotal;