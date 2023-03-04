import styles from './burger-constructor.module.css';
import { ICardTypes } from '../../utils/propsType';

import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorPlug from '../burger-constructor-plug/burger-constructor-plug'
import BurgerConstructorList from '../burger-constructor-list/burger-constructor-list'
import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'

import { ADD_INGRIDIENT, ADD_BUN, SET_TOTALPRICE } from '../../services/actions/burger-constructor'

const BurgerConstructor = () => {
    const { bun, constructorIngridients, totalPrice } = useSelector((state: any) => state.burgerConstrucor);
    const dispatch = useDispatch();

    interface IIngridient {
        ingridient: ICardTypes;
    }

    const [, dropTarget] = useDrop({
        accept: 'ingridient',
        drop: ({ ingridient }: IIngridient) => {
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


export default BurgerConstructor;