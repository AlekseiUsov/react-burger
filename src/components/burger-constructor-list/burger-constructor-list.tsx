import React, { FC } from 'react';
import styles from './burger-constructor-list.module.css';
import { ICardTypes } from '../../utils/propsType';

import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { REMOVE_INGRIDIENT, SET_TOTALPRICE } from '../../services/actions/burger-constructor'
import { useDispatch } from 'react-redux';

interface IConstructorElementType extends ICardTypes {
    uniqid: string
}

interface IBurgerConstructorlist {
    ingridients: Array<IConstructorElementType>
}

const BurgerConstructorlist: FC<IBurgerConstructorlist> = ({ ingridients }) => {

    const filteredIngridients = React.useMemo(
        () => ingridients.filter((ingridient) => ingridient.type !== 'bun')
        , [ingridients]);


    const dispatch = useDispatch();

    const removeIngridient = (ingridient: IConstructorElementType) => {
        dispatch({ type: REMOVE_INGRIDIENT, ingridient })
        dispatch({ type: SET_TOTALPRICE, ingridient })
    }

    return (
        <div className={`${styles.cardsContainer} custom-scroll`}>
            {filteredIngridients
                .map((ingridient, index: number) => (
                    <BurgerConstructorItem
                        key={ingridient.uniqid}
                        index={index}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            handleClose={() => removeIngridient(ingridient)}
                            thumbnail={ingridient.image}
                            text={ingridient.name}
                            price={ingridient.price}
                        />
                    </BurgerConstructorItem>
                ))}
        </div>
    )
}


export default BurgerConstructorlist;