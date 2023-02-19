import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredient-card.module.css';

import Modal from '../modal-window/modal-window';
import IngredientDetailsCard from '../ingredient-details-card/ingredient-details-card';
import cardTypes from '../../utils/propsType';
import { Link, useParams } from 'react-router-dom';


import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { GET_CURRENT_INGRIDIENT, REMOVE_CURRENT_INGRIDIENT } from '../../services/actions/current-ingridient'
import { useLocation, useNavigate } from 'react-router-dom';


const BurgerIngredientCard = (ingridient) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { currentIngridient } = useSelector(state => state.currentIngridient);
    const { bun, constructorIngridients } = useSelector(state => state.burgerConstrucor);


    const count = React.useMemo(() => {
        const result = ingridient.type === 'bun'
            ? bun?._id === ingridient._id ? 2 : 0
            : constructorIngridients.filter((item) => item._id === ingridient._id).length
        return result;
    }, [ingridient, bun, constructorIngridients])



    const updateConstrctorIngridients = () => {
        if (currentIngridient) {
            dispatch({ type: REMOVE_CURRENT_INGRIDIENT, ingridient })
        } else {
            dispatch({ type: GET_CURRENT_INGRIDIENT, ingridient })
            navigate(`/ingridients/${ingridient._id}`, { state: { background: location } })
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
        <div
            className={styles.container}
            onClick={() => updateConstrctorIngridients()}
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
        </div>
    )
}

BurgerIngredientCard.propTypes = { cardTypes };

export default BurgerIngredientCard;