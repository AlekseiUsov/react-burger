import { useEffect } from "react"
import styles from './order-page.module.css';
import { RootState, useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';
import { getAllOrdersConnect } from "../../services/actions/ws-get-all-orders";
import { getIngredients } from '../../services/actions/ingridients'
import { OrderCard } from "../../components/order-card/order-card";

const wsUrl = 'wss://norma.nomoreparties.space/orders/all';
let ws: WebSocket;

export const OrdersPage = () => {
    const { wsConnected, orders, total, totalToday } = useSelector((store: RootState) => store.allOrders);
    const doneOrdersNumber = orders
        .filter((order) => order.status === 'done')
        .map((order) => order.number)
        .slice(0, 12).sort((a, b) => a + b)

    const gettingOrdersNumber = orders
        .filter((order) => order.status === 'pending')
        .map((order) => order.number)
        .slice(0, 12).sort((a, b) => a + b)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getAllOrdersConnect(wsUrl))
    }, [dispatch]);

    return (
        <div>
            {!wsConnected ? (
                <h1 className={styles.loader}>Пожайлуста подождите...</h1>
            ) : (
                <div className={styles.wrapper} >
                    <div className={styles.orders}>
                        <h1 className={styles.title}>Лента заказов</h1>
                        <div className={`${styles.list} custom-scroll`}>
                            {orders
                                .map((ingridient) => (
                                    <OrderCard
                                        key={ingridient._id}
                                        {...ingridient}
                                    />
                                ))}
                        </div>
                    </div>
                    <div className={`${styles.main} custom-scroll`}>
                        <div className={styles.container}>
                            <div className={styles.ready}>
                                <h1>Готовы:</h1>
                                <div className={styles.statuses}>
                                    {doneOrdersNumber
                                        .map((num, index) => (
                                            index < 12 ?
                                                <p
                                                    key={index}
                                                >{num}</p>
                                                : null
                                        ))}
                                </div>
                            </div>
                            <div className={styles.getting}>
                                <h1>В работе:</h1>
                                <div className={styles.statuses}>
                                    {gettingOrdersNumber
                                        .map((num, index) => (
                                            index < 12 ?
                                                <p
                                                    key={index}
                                                >{num}</p>
                                                : null
                                        ))}
                                </div>
                            </div>
                        </div>
                        <h1 className={styles.totalAll}>Выполнено за все время:</h1>
                        <p className={styles.count}>{total}</p>
                        <h1 className={styles.totalToday}>Выполнено за все сегодня:</h1>
                        <p className={styles.count}>{totalToday}</p>
                    </div>
                </div>
            )
            }
        </div>
    )
}

