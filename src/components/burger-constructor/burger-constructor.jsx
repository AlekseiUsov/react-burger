import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import cardTypes from '../../utils/propsType';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import BurgerConstructorList from '../burger-constructor-list/burger-constructor-list'
import BurgerConstructorTotal from '../burger-constructor-total/burger-constructor-total'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = ({ ingridients }) => {

    return (
        <div className={`${styles.wrapper} mt-25`}>
            <div className={`${styles.cardsContainer} custom-scroll`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
                />
                <BurgerConstructorList ingridients={ingridients} />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
                />
            </div>
            <BurgerConstructorTotal
                text="610"
                icon={<CurrencyIcon type="primary" />}
            />
        </div >
    )
}

BurgerConstructor.propTypes = {
    ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerConstructor;