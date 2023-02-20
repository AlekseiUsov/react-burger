import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient-card.module.css';
import Modal from '../modal-window/modal-window';
import IngredientDetailsCard from '../ingredient-details-card/ingredient-details-card';
import cardTypes from '../../utils/propsType';

const BurgerIngredientCard = (ingridient) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);

    return (
        <>
            <div className={styles.container}>
                <div
                    className={`${styles.wrapper} pt-6`}
                    onClick={() => setIsOpenModal(true)}
                >
                    <div>
                        <img src={ingridient.image} />
                    </div>
                    <div className={styles.inner}>
                        <span>{ingridient.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p>{ingridient.name}</p>
                </div>
                <Counter style={{ position: 'absolute', top: '0', right: '20px' }} />
            </div>
            {
                isModalOpen && <Modal
                    children={ingridient}
                    setIsModalOpen={() => setIsOpenModal(false)}
                    title={'Детали ингридиента'}>
                    <IngredientDetailsCard
                        _id={ingridient._id}
                        name={ingridient.name}
                        image_large={ingridient.image_large}
                        proteins={ingridient.proteins}
                        calories={ingridient.calories}
                        fat={ingridient.fat}
                        carbohydrates={ingridient.carbohydrates}
                    />
                </Modal>
            }
        </>
    )
}

BurgerIngredientCard.propTypes = { cardTypes };

export default BurgerIngredientCard;