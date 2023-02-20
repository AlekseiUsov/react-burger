import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient-card.module.css';

import Modal from '../modal-window/modal-window';
import cardTypes from '../../utils/propsType';


import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


const BurgerIngredientCard = (ingridient) => {
    const location = useLocation();

    const { bun, constructorIngridients } = useSelector(state => state.burgerConstrucor);


    const count = React.useMemo(() => {
        const result = ingridient.type === 'bun'
            ? bun?._id === ingridient._id ? 2 : 0
            : constructorIngridients.filter((item) => item._id === ingridient._id).length
        return result;
    }, [ingridient, bun, constructorIngridients])


    const [, dragRef] = useDrag({
        type: 'ingridient',
        item: { ingridient },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    return (
        <Link
            to={`/ingridients/${ingridient._id}`}
            state={{ background: location }}
            className={styles.container}
        >
            <div ref={dragRef}>
                <img src={ingridient.image} />
            </div>
            <div className={styles.price}>
                <span>{ingridient.price}</span>
                <CurrencyIcon type="primary" />
            </div>
            <p>{ingridient.name}</p>
            <Counter count={count} />
        </Link>
    )
}

BurgerIngredientCard.propTypes = { cardTypes };

export default BurgerIngredientCard;