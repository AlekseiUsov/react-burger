import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { FC } from 'react'
import styles from './order-card-ingridient.module.css'

interface IOrderCardIngridient {
    name: string,
    image_mobile: string,
    count: number,
    price: number,
}

export const OrderCardIngridient: FC<IOrderCardIngridient> = ({ name, image_mobile, count, price }) => {

    return (
        <li
            className={styles.item}
        >
            <div className={styles.icon}>
                <img src={image_mobile} />
            </div>
            <p className={styles.name}>{name}</p>
            <div className={styles.price}>
                <span>{count} x</span>
                <span>{price}</span>
                <CurrencyIcon type="primary" />
            </div>
        </li>
    )
}



