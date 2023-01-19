import styles from './modal-window.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ setIsModalOpen }) => {
    return (
        <div onClick={setIsModalOpen} className={styles.overlay}></div>
    );
}

ModalOverlay.propTypes = PropTypes.shape({
    className: PropTypes.string.isRequired,
    onClick: PropTypes.string.isRequired,
});

export default ModalOverlay;