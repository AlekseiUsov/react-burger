import styles from './burger-ingredients-group.module.css';
import cardTypes from '../../utils/propsType';
import PropTypes from 'prop-types';

import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card';

function BurgerIngredientsGroup({ title, ingridients }) {

    return (
        <div className='pt-10'>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.cards}>
                {ingridients
                    .map((ingridient) => (
                        <BurgerIngredientCard
                            key={ingridient._id}
                            _id={ingridient._id}
                            type={ingridient.type}
                            name={ingridient.name}
                            image={ingridient.image}
                            image_large={ingridient.image_large}
                            image_mobile={ingridient.image_mobile}
                            calories={ingridient.calories}
                            carbohydrates={ingridient.carbohydrates}
                            fat={ingridient.fat}
                            proteins={ingridient.proteins}
                            price={ingridient.price}
                        />
                    ))}
            </div>
        </div>
    );
}

BurgerIngredientsGroup.propTypes = {
    title: PropTypes.string.isRequired,
    ingridients: PropTypes.arrayOf(cardTypes.isRequired).isRequired
};

export default BurgerIngredientsGroup;