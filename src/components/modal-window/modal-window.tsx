import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-window.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import { useNavigate } from 'react-router-dom';


const modalRoot = (document.getElementById("react-modals") as Element);


interface IModalOverlay {
    title: string;
    children: React.ReactElement;
}


const Modal: FC<IModalOverlay> = ({ title, children }) => {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate('/')
    }

    React.useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
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
                        type="primary"
                        onClick={closeModal}
                    />
                </div>
                {children}
            </div>
            <ModalOverlay closeModal={closeModal} />
        </>,
        modalRoot);
}

export default Modal;