import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-window.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';


const modalRoot = document.getElementById("react-modals");


const Modal = ({ title, children }) => {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate('/')
    }

    React.useEffect(() => {
        const handleEsc = (e) => {
            e.key === "Escape" && closeModal();
        };
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [navigate]);

    return ReactDOM.createPortal(
        <>
            <div className={styles.window} >
                <div className={styles.header}>
                    <p className={styles.text}>{title}</p>
                    <CloseIcon
                        onClick={closeModal}
                        styles={{ width: '18px', height: '18px' }}
                    />
                </div>
                {children}
            </div>
            <ModalOverlay closeModal={closeModal} />
        </>,
        modalRoot);
}


Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired
};

export default Modal;