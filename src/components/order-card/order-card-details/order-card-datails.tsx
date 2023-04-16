import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useSelector } from '../../../services/typesOfStoreAndThunk';
import { convertStatus } from '../../../utils/convert-status';
import { getElement } from '../../../utils/getElement';
import { getOrderIngridients } from '../../../utils/getOrderIngridients';
import { IOrderTypes } from '../../../utils/propsType';
import styles from './order-card-details.module.css'
import { OrderCardIngridient } from './order-card-ingridient/order-card-ingridient';

interface IOrderCardDetails {
    order: IOrderTypes;
}

interface IItem {
    name: string,
    count: number,
    price: number,
    image_mobile: string,
}

interface IObject {
    [_id: string]: IItem
}


export const OrderCardDetails: FC<IOrderCardDetails> = ({ order }) => {

    const { name, status, ingredients, createdAt } = order;
    const data = FormattedDate({ date: new Date(createdAt) })

    const translatedStatus = convertStatus(status);

    const { ingridients } = useSelector(store => store.ingridients);

    let totalPrice: number = 0;

    const totalPriceDetails = ingredients.reduce((acc: IObject, ingredient) => {

        if (typeof ingredient === 'string') {
            const { _id, name, price, image_mobile } = getElement(ingredient, ingridients);
            totalPrice += price;

            if (!acc.hasOwnProperty(_id)) {
                acc[_id] = { name, count: 1, price, image_mobile }
            } else {
                acc[_id] = { ...acc[_id], count: acc[_id].count + 1, price: acc[_id].count * acc[_id].price }
            }
        }

        return acc;
    }, {})

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.name}>{name}</h1>
            <p className={translatedStatus === 'Выполнен' ? styles.success : ''}>{translatedStatus}</p>
            <h2 className={styles.content}>Состав:</h2>
            <ul className={`${styles.list} custom-scroll`}>
                {Object.entries(totalPriceDetails)
                    .map((ingridient, index) => (
                        <OrderCardIngridient
                            key={index}
                            {...ingridient[1]}
                        />
                    ))}
            </ul>
            <div className={styles.orderDetails}>
                <p className={styles.data}>{data}</p>
                <div className={styles.inner}>
                    <p>{totalPrice}</p>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}



