import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient-card.module.css';

import Modal from '../modal-window/modal-window';
import IngredientDetailsCard from '../ingredient-details-card/ingredient-details-card';
import cardTypes from '../../utils/propsType';

import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { GET_CURRENT_INGRIDIENT, REMOVE_CURRENT_INGRIDIENT } from '../../services/actions/current-ingridient'

const BurgerIngredientCard = (ingridient) => {
    const [isModalOpen, setIsOpenModal] = React.useState(false);
    const { currentIngridient } = useSelector(state => state.currentIngridient);
    const { bun, constructorIngridients } = useSelector(state => state.burgerConstrucor);

    const count = React.useMemo(() => {
        const result = ingridient.type === 'bun'
            ? bun?._id === ingridient._id ? 2 : 0
            : constructorIngridients.filter((item) => item._id === ingridient._id).length
        return result;
    }, [ingridient, bun, constructorIngridients])


    const updateupdateconstructorIngridients = () => {
        if (currentIngridient) {
            dispatch({ type: REMOVE_CURRENT_INGRIDIENT, ingridient })
        } else {
            dispatch({ type: GET_CURRENT_INGRIDIENT, ingridient })
        }
    }

    const dispatch = useDispatch();

    const [, dragRef] = useDrag({
        type: 'ingridient',
        item: { ingridient },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return (
        <>
            <div className={styles.container} >
                <div
                    className={`${styles.wrapper} pt-6`}
                    onClick={() => { setIsOpenModal(true); updateupdateconstructorIngridients() }}

                >
                    <div ref={dragRef}>
                        <img src={ingridient.image} />
                    </div>
                    <div className={styles.inner}>
                        <span>{ingridient.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <p>{ingridient.name}</p>
                </div>
                <Counter count={count} style={{ position: 'absolute', top: '0', right: '20px' }} />
            </div>
            {
                isModalOpen && <Modal
                    children={ingridient}
                    setIsOpenModal={() => { setIsOpenModal(false); updateupdateconstructorIngridients() }}
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