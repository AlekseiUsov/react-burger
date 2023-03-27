import { useEffect } from 'react'
import { getCookie } from 'typescript-cookie';
import { ListOrders } from '../../../components/orders-list/orders-list';
import { closeUserOrders, getUserOrdersConnect } from '../../../services/actions/ws-get-user-orders';
import { useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk'
import styles from './profile-orders.module.css'

export const ProfileOrdersPage = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((store) => store.userOrders);

    const token = getCookie('accessToken');
    const wsUrl = `wss://norma.nomoreparties.space/orders`;

    useEffect(() => {
        dispatch(getUserOrdersConnect(`${wsUrl}?token=${token}`))
        return () => { dispatch(closeUserOrders()) }
    }, [dispatch, token, wsUrl])

    return (
        <div className={styles.wrapper}>
            {orders
                ? <ListOrders userOrders={orders} succession={true} visibleStatus={true} page={'profile/orders'} />
                : <h1 className={styles.title}>Здесь будут ваши заказы</h1>
            }
        </div>
    )
}

