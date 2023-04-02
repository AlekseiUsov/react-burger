import styles from './orders-list.module.css'
import { OrderCard } from "../order-card/order-card"
import { IOrderTypes } from "../../utils/propsType";
import { FC } from 'react';


interface IListOrder {
    userOrders: IOrderTypes[];
    succession: boolean;
    visibleStatus: boolean;
    page: string;
}


export const ListOrders: FC<IListOrder> = ({ userOrders, succession, visibleStatus, page }) => {
    const array = succession ? [...userOrders].reverse().slice(0, 12) : userOrders;

    return (
        <div>
            <div className={`${styles.list} custom-scroll`}>
                {array
                    .map((order) => (
                        <OrderCard
                            key={order._id}
                            visibleStatus={visibleStatus}
                            page={page}
                            {...order}
                        />
                    ))
                }
            </div>
        </div>
    )
}