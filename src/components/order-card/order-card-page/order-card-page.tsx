import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentOrder } from '../../../services/actions/current-order';
import { useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk';
import { OrderCardDetails } from '../order-card-details/order-card-datails';
import styles from './order-card-page.module.css';


export const OrderCardPage = () => {
    const dispatch = useDispatch();
    const { number = '' } = useParams();
    const { order } = useSelector((store) => store.currentOrder);

    useEffect(() => {
        dispatch(getCurrentOrder(number))
    }, [dispatch, number]);

    return (
        <>
            {!order
                ? <h1 style={{ textAlign: 'center' }}>Идет загрузка ...</h1>
                : <div className={styles.wrapper}>
                    <p className={styles.title}>{`# ${order.number}`}</p>
                    <OrderCardDetails order={order} />
                </div>
            }
        </>
    )
}