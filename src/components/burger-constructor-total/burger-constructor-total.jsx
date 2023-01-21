import styles from './burger-constructor-total.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import Modal from '../modal-window/modal-window';
import PropTypes from 'prop-types';
import OrderDetails from '../order-details/order-details';


const BurgerConstructorTotal = ({ text, icon }) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);

    return (
        <>
            <div onClick={() => setIsOpenModal(true)} className={`${styles.wrapper} pt-10 mr-10`}>
                <div className={`${styles.counter} mr-10`} >
                    <span className={`${styles.text}`} >{text}</span>
                    <span className={`${styles.icon}`}>{icon}</span>
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div >
            {
                isModalOpen && <Modal
                    setIsModalOpen={() => setIsOpenModal(false)}
                >
                    <OrderDetails title={"034536"} />
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