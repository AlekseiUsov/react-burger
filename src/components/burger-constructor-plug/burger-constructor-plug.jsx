import styles from './burger-constructor-plug.module.css';
import PropTypes from 'prop-types';


const BurgerConstructorPlug = ({ text, position }) => {

    return (
        <div className={`${styles.wrapper}  ${position ? styles[position] : ''}`} > {text}</div >
    )
}

BurgerConstructorPlug.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default BurgerConstructorPlug;