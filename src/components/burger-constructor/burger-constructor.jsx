import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import cardTypes from '../../utils/propsType';

import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorPlug from '../burger-constructor-plug/burger-constructor-plug'
import BurgerConstructorList from '../burger-constructor-list/burger-constructor-list'
import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { ADD_INGRIDIENT, ADD_BUN, SET_TOTALPRICE } from '../../services/actions/burger-constructor'

const BurgerConstructor = () => {
    const { bun, constructorIngridients, totalPrice } = useSelector(state => state.burgerConstrucor);
    const dispatch = useDispatch();


    const [, dropTarget] = useDrop({
        accept: 'ingridient',
        drop: ({ ingridient }) => {
            if (ingridient.type === 'bun') {
                dispatch({ type: ADD_BUN, ingridient })
            } else {
                dispatch({ type: ADD_INGRIDIENT, ingridient })
            }
            dispatch({ type: SET_TOTALPRICE, ingridient })
        }
    });

    return (
        <div className={`${styles.wrapper} mt-25`} ref={dropTarget}>
            <div className={`${styles.cardsContainer} custom-scroll`}>

                {!bun ? (
                    <BurgerConstructorPlug text="Верхняя булка" position="top" />
                ) : (
                    < ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={`${bun.image}`}
                    />
                )}
                {constructorIngridients.length === 0 ? (
                    <BurgerConstructorPlug text="Начинки" position="middle" />
                ) : (
                    <BurgerConstructorList ingridients={constructorIngridients} />
                )}

                {!bun ? (
                    <BurgerConstructorPlug text="Нижняя булка" position="bottom" />
                ) : (
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={`${bun.image}`}
                    />
                )}
            </div>
            <BurgerConstructorTotal
                text={`${totalPrice}`}
                icon={<CurrencyIcon type="primary" />}
            />
        </div >
    )
}

BurgerConstructor.propTypes = {
    ingridients: PropTypes.arrayOf(cardTypes.isRequired)
};


export default BurgerConstructor;