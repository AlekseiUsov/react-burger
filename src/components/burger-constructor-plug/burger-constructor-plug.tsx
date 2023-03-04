import styles from './burger-constructor-plug.module.css';
import { FC } from 'react';

interface IBurgerConstructorPlug {
    position: string;
    text: string;
}

const BurgerConstructorPlug: FC<IBurgerConstructorPlug> = ({ text, position }) => {

    return (
        <div className={`${styles.wrapper}  ${position ? styles[position] : ''}`} > {text}</div >
    )
}


export default BurgerConstructorPlug;