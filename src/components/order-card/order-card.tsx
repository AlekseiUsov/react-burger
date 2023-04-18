import styles from './order-card.module.css';
import { useSelector } from '../../services/typesOfStoreAndThunk';
import { OrderImages } from './order-images/order-images'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { ICardTypes, IOrderTypes } from '../../utils/propsType';
import { FC } from 'react';
import { convertStatus } from '../../utils/convert-status';
import { getOrderIngridients } from '../../utils/getOrderIngridients';

export const OrderCard: FC<IOrderTypes> = ({ ingredients, createdAt, name, number, status, visibleStatus, page }) => {

    const location = useLocation();
    const translatedStatus = convertStatus(status);

    const { ingridients } = useSelector(store => store.ingridients);

    const orderIngridients = getOrderIngridients(ingredients, ingridients)

    const allIcons = orderIngridients.map((ingridient) => ingridient.image_mobile);
    const sortedIcons = allIcons.filter((x, i) => allIcons.indexOf(x) === i);
    const totalPrice = orderIngridients.reduce((acc: number, ingridient: ICardTypes) => acc + ingridient.price, 0);
    const data = FormattedDate({ date: new Date(createdAt) })


    return (
        <Link
            to={`/${page}/${number}`}
            state={{ background: location }}
            className={styles.order}
        >
            <div className={styles.header}>
                <p className={styles.title}>#{number}</p>
                <p className={styles.data}>{data}</p>
            </div>
            {visibleStatus &&
                <p className={translatedStatus === 'Выполнен' ? styles.success : ''}>{translatedStatus}</p>
            }
            <p className={styles.name}>{name}</p>
            <div className={styles.inner}>
                <OrderImages icons={sortedIcons} />
                <div className={styles.priceWrapper}>
                    <p className={styles.totalPrice}>{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </Link>
    )
}

