import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal-window.module.css'

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay'
import { useLocation, useNavigate } from 'react-router-dom';


const modalRoot = (document.getElementById("react-modals") as Element);


interface IModal {
    style?: React.CSSProperties;
    title?: string;
    children: React.ReactElement;
}


const Modal: FC<IModal> = ({ title, children, style }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const closeModal = React.useCallback(() => {
        location?.state?.background && navigate(location.state.background)
    }, [location.state, navigate])

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
                    <p className={styles.text} style={style}>{title}</p>
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