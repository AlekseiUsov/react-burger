import styles from './burger-ingredients.module.css';
import cardTypes from '../../utils/propsType';
import PropTypes from 'prop-types';

function BurgerIngredientsGroup(props) {
    return (
        <div className='pt-10'>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.cards}>
                <div className={styles.cards}>{props.children}</div>
            </div>
        </div>
    );
}


BurgerIngredientsGroup.propTypes = PropTypes.shape({
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(cardTypes.isRequired).isRequired
});

export default BurgerIngredientsGroup;