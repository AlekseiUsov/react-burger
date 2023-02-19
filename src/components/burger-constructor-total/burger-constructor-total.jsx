import styles from './burger-constructor-total.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import Modal from '../modal-window/modal-window';
import PropTypes from 'prop-types';
import OrderDetails from '../order-details/order-details';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { getOrderDetails } from '../../services/actions/order';



const BurgerConstructorTotal = ({ text, icon }) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

    const orderDetails = useSelector(state => state.orderDetails)
    const { bun, constructorIngridients } = useSelector(state => state.burgerConstrucor);
    const user = useSelector(state => state.auth.user);

    const ingridientsIds = (constructorIngridients).map((ingridient) => ingridient._id);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getOrder = () => {
        if (bun === null || ingridientsIds.length === 0) {
            setIsPopUpOpen(true)
            setTimeout(() => setIsPopUpOpen(false), 3000)

        } else {
            if (user.name !== null) {
                dispatch(getOrderDetails([...ingridientsIds, bun._id]))
                setIsOpenModal(!isModalOpen)
            } else {
                navigate('/login')
            }

        }
    }

    return (
        <>
            <div className={`${styles.wrapper} pt-10 mr-10`}>
                {isPopUpOpen && !isModalOpen &&
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
            {
                isModalOpen && <Modal
                    setIsOpenModal={() => setIsOpenModal(false)}
                >
                    <OrderDetails title={orderDetails.name} number={orderDetails.order.number} />
                </Modal>
            }
        </>

    )
}

BurgerConstructorTotal.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
};

export default BurgerConstructorTotal;