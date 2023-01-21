import styles from './burger-constructor-item.module.css';
import PropTypes from 'prop-types';


const BurgerConstructorItem = ({ children }) => {

    return (
        <div className={`${styles.item}`}>
            {children}
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};


export default BurgerConstructorItem;