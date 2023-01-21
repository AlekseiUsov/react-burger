import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ setIsModalOpen }) => {
    return (
        <div onClick={setIsModalOpen} className={styles.overlay}></div>
    );
}

ModalOverlay.propTypes = {
    setIsModalOpen: PropTypes.func.isRequired,
};

export default ModalOverlay;