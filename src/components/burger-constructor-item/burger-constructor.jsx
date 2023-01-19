import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';


const BurgerConstructorItem = (props) => {
    return (
        <div className={`${styles.item}`}>
            {props.children}
        </div>
    )
}

BurgerConstructorItem.propTypes = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
});


export default BurgerConstructorItem;