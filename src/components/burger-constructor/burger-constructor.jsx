import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';
import cardTypes from '../../utils/propsType';

const BurgerConstructor = (props) => {
    return (
        <div className={`${styles.wrapper} mt-25`}>
            <div className={`${styles.cardsContainer} custom-scroll`}>
                {props.children}
            </div>
        </div >
    )
}

BurgerConstructor.propTypes = {
    children: PropTypes.arrayOf(cardTypes.isRequired).isRequired
}

export default BurgerConstructor;