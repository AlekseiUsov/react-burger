import { useEffect } from 'react'
import { getCookie } from 'typescript-cookie';
import { OrderCard } from '../../../components/order-card/order-card';
import { closeUserOrders, getUserOrdersConnect } from '../../../services/actions/ws-get-user-orders';
import { RootState, useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk'
import styles from './profile-orders.module.css'

const token = getCookie('accessToken');
const wsUrl = `wss://norma.nomoreparties.space/orders`;

export const ProfileOrdersPage = () => {
    const dispatch = useDispatch();
    const { orders } = useSelector((store: RootState) => store.userOrders);
    const reverse = [...orders].reverse().slice(0, 50);
    console.log(reverse)

    useEffect(() => {
        dispatch(getUserOrdersConnect(`${wsUrl}?token=${token}`))
        return () => { dispatch(closeUserOrders()) }
    }, [dispatch, token])

    return (
        <div className={styles.wrapper}>
            {!orders
                ? <h1>Здесь будут ваши заказы</h1>
                : <div className={`${styles.list} custom-scroll`}>
                    {reverse
                        .map((ingridient) => (
                            <OrderCard
                                key={ingridient._id}
                                visibleStatus={true}
                                {...ingridient}
                            />
                        ))}
                </div>
            }
        </div>
    )
}

