import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-window.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-window'
import PropTypes from 'prop-types';


const modalRoot = document.getElementById("react-modals");


const Modal = ({ setIsModalOpen, ...props }) => {

    React.useEffect(() => {
        const handleEsc = (e) => {
            e.key === "Escape" && setIsModalOpen();
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [setIsModalOpen]);

    return ReactDOM.createPortal(
        <>
            <div className={styles.window} >
                <div className={styles.header}>
                    <p className={styles.text}>{props.title}</p>
                    <CloseIcon
                        onClick={setIsModalOpen}
                        styles={{ width: '18px', height: '18px' }}
                    />
                </div>
                {props.children}
            </div>
            <ModalOverlay setIsModalOpen={setIsModalOpen} />
        </>,
        modalRoot);
}


Modal.propTypes = PropTypes.shape({
    className: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    children: PropTypes.elementType,
});

export default Modal;