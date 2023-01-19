import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient-card.module.css';
import PropTypes from 'prop-types';
import Modal from '../modal-window/modal-window';
import IngredientDetailsCard from '../ingredient-details-card/ingredient-details-card';

const BurgerIngredientCard = (props) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);

    return (
        <>
            <div className={styles.container} >
                <div
                    onClick={() => setIsOpenModal(true)}
                    key={props._id}
                    type={props.type}
                    className={`${styles.wrapper} 
            pt-6`} >
                    <div>
                        <img src={props.image} />
                    </div>
                    <div className={styles.inner}>
                        <span>{props.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p>{props.name}</p>
                </div>
                <Counter style={{ position: 'absolute', top: '0', right: '20px' }} />
            </div>
            {
                isModalOpen && <Modal
                    setIsModalOpen={() => setIsOpenModal(false)}
                    title={'Детали ингридиента'}>
                    <IngredientDetailsCard
                        image_large={props.image_large}
                        name={props.name}
                        calories={props.calories}
                        proteins={props.proteins}
                        carbohydrates={props.carbohydrates}
                        fat={props.fat}
                    />
                </Modal>
            }
        </>
    )
}

BurgerIngredientCard.propTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
});

export default BurgerIngredientCard;