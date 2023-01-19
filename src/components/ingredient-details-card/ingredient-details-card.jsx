import styles from './ingredient-details-card.module.css';
import PropTypes from 'prop-types';

const IngredientDetailsCard = (props) => {

    return (
        <div className={`${styles.wrapper} mt-4`}>
            <div>
                <img src={props.image_large} />
            </div>
            <h2 className={`${styles.subtitle} mt-4`}>{props.name}</h2>
            <div className={`${styles.block} mt-8`}>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Калории, ккал</p>
                    <p className={`${styles.text} ${styles.num}`}>{props.calories}</p>
                </div >
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Белки, г</p>
                    <p className={`${styles.text} ${styles.num}`}>{props.proteins}</p>
                </div>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Жиры, г</p>
                    <p className={`${styles.text} ${styles.num}`}>{props.fat}</p>
                </div>
                <div className={`${styles.inner} mr-5`}>
                    <p className={styles.text}>Углеводы, г</p>
                    <p className={`${styles.text} ${styles.num}`}>{props.carbohydrates}</p>
                </div>
            </div >
        </div >
    )
}

IngredientDetailsCard.propTypes = PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
});

export default IngredientDetailsCard;