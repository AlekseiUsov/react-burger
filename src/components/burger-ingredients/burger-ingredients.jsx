import Tabs from "../tabs-nav/tabs-nav";
import styles from './burger-ingredients.module.css';
import PropTypes from 'prop-types';


function BurgerIngredients(props) {
    return (
        <div className={styles.wrapper}>
            <h1 className={`${styles.title} pt-10`}>{props.title}</h1>
            <Tabs />
            <div className={`${styles.cardsContainer} custom-scroll`}> {props.children}</div>
        </div >
    );
}

BurgerIngredients.propTypes = PropTypes.shape({
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
});

export default BurgerIngredients;