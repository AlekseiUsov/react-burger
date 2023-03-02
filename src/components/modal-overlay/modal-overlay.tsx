import styles from './modal-overlay.module.css';
import { FC } from "react";

interface IModalOverlay {
    closeModal: () => void;
}


const ModalOverlay: FC<IModalOverlay> = ({ closeModal }) => {
    return (
        <div onClick={closeModal} className={styles.overlay}></div>
    );
}


export default ModalOverlay;