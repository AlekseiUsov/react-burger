import styles from './burger-constructor-list.module.css';
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card';
import PropTypes from 'prop-types';

const BurgerConstructorlist = (props) => {
    return (
        <div className={`${styles.cardsContainer} custom-scroll`}>
            {props.children}
        </div>
    )
}

BurgerConstructorlist.propTypes = {
    children: PropTypes.arrayOf(BurgerIngredientCard.isRequired).isRequired
}

export default BurgerConstructorlist;