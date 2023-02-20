import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-window.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import IngredientDetailsCard from '../ingredient-details-card/ingredient-details-card';

import PropTypes from 'prop-types';
import cardTypes from '../../utils/propsType';


const modalRoot = document.getElementById("react-modals");


const Modal = ({ setIsModalOpen, title, children }) => {

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
                    <p className={styles.text}>{title}</p>
                    <CloseIcon
                        onClick={setIsModalOpen}
                        styles={{ width: '18px', height: '18px' }}
                    />
                </div>
                {children}
            </div>
            <ModalOverlay setIsModalOpen={setIsModalOpen} />
        </>,
        modalRoot);
}


Modal.propTypes = {
    title: PropTypes.string,
    setIsModalOpen: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired
};

export default Modal;