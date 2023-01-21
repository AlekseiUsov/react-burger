import styles from './burger-constructor-list.module.css';
import PropTypes from 'prop-types';
import cardTypes from '../../utils/propsType';

import BurgerConstructorItem from '../burger-constructor-item/burger-constructor-item';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const filterIngridients = (ingridients, type) => {
    return ingridients
        .filter((ingridient) => ingridient.type !== type)
}

const BurgerConstructorlist = ({ ingridients }) => {
    const filteredIngridients = filterIngridients(ingridients, 'bun');

    return (
        <div className={`${styles.cardsContainer} custom-scroll`}>
            {filteredIngridients
                .map((ingridient) => (
                    <BurgerConstructorItem key={ingridient._id}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            key={ingridient._id}
                            thumbnail={ingridient.image}
                            text={ingridient.name}
                            price={ingridient.price}
                        />
                    </BurgerConstructorItem>
                ))}
        </div >
    )
}

BurgerConstructorlist.propTypes = {
    ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
}

export default BurgerConstructorlist;