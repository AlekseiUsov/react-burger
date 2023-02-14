import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ setIsOpenModal }) => {
    return (
        <div onClick={setIsOpenModal} className={styles.overlay}></div>
    );
}

ModalOverlay.propTypes = {
    setIsOpenModal: PropTypes.func.isRequired
};

export default ModalOverlay;