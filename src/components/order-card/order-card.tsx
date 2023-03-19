import styles from './order-card.module.css';
import { RootState, useSelector } from '../../services/typesOfStoreAndThunk';
import { convertData } from '../../utils/convert-data';
import { OrderImages } from './order-images/order-images'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';

export const OrderCard = (order: any) => {
    const location = useLocation();

    const { ingridients } = useSelector((store: RootState) => store.ingridients);
    const orderIngridients = ingridients.filter((ingridient) => order.ingredients.includes(ingridient._id));
    const icons = orderIngridients.map((ingridient) => ingridient.image_mobile);
    const totalPrice = orderIngridients.reduce((acc, ingridient) => acc + ingridient.price, 0);
    const data = convertData(order.createdAt)


    return (
        <Link
            to={`/feed/${order.number}`}
            state={{ background: location }}
            className={styles.order}
        >
            <div className={styles.header}>
                <p className={styles.title}>#{order.number}</p>
                <p className={styles.data}>{data}</p>
            </div>
            <p className={styles.name}>{order.name}</p>
            <div className={styles.inner}>
                <OrderImages icons={icons} />
                <div className={styles.priceWrapper}>
                    <p className={styles.totalPrice}>{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </Link>
    )
}

