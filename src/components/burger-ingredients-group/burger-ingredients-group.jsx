import styles from './burger-ingredients-group.module.css';
import cardTypes from '../../utils/propsType';
import PropTypes from 'prop-types';
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card';

const BurgerIngredientsGroup = ({ title, ingridients, name }) => {

    return (
        <div className='mt-10' name={name}>
            <h1 className={styles.title} >{title}</h1>

            <div className={styles.cards}>
                {ingridients
                    .map((ingridient) => (
                        <BurgerIngredientCard
                            key={ingridient._id}
                            {...ingridient}
                        />
                    ))}
            </div>
        </div>
    );
}

BurgerIngredientsGroup.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerIngredientsGroup;