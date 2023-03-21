import styles from './order-card.module.css';
import { RootState, useSelector } from '../../services/typesOfStoreAndThunk';
import { convertData } from '../../utils/convert-data';
import { OrderImages } from './order-images/order-images'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { ICardTypes, IOrderTypes } from '../../utils/propsType';
import { FC } from 'react';
import { getElement } from '../../utils/getElement';

export const OrderCard: FC<IOrderTypes> = ({ ingredients, createdAt, name, number }) => {
    const location = useLocation();


    const { ingridients } = useSelector((store: RootState) => store.ingridients);
    const orderIngridients = ingredients.reduce((acc: ICardTypes[], ingredient) => {
        const current = getElement(ingredient, ingridients);
        return [...acc, current];
    }, []);

    const allIcons = orderIngridients.map((ingridient) => ingridient.image_mobile);
    const sortedIcons = allIcons.filter((x, i) => allIcons.indexOf(x) === i);
    const totalPrice = orderIngridients.reduce((acc: number, ingridient: ICardTypes) => acc + ingridient.price, 0);
    const data = convertData(createdAt)


    return (
        <Link
            to={`/feed/${number}`}
            state={{ background: location }}
            className={styles.order}
        >
            <div className={styles.header}>
                <p className={styles.title}>#{number}</p>
                <p className={styles.data}>{data}</p>
            </div>
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

