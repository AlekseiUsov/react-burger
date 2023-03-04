import styles from './order-details.module.css';
import done from '../../images/done.svg';
import { useSelector } from 'react-redux';


const OrderDetails = () => {

    const {
        isLoading,
        name,
        order: { number }
    } = useSelector((state: any) => state.orderDetails)

    return (
        <>
            {isLoading ? < h1 > Подождите, идет загрузка ...</ h1> : (
                <div className={`${styles.wrapper} mt-5 mb-10`}>
                    <h1 className={`${styles.title} mt-15`}>{number}</h1>
                    <h2 className={`${styles.subtitle} mt-8`}>{name}</h2>
                    <div className='mt-15'>
                        <img src={done} />
                    </div>
                    <p className={styles.notification}>Ваш заказ начали готовить</p>
                    <p className={styles.announcement}>Дождитесь готовности на орбитальной станции</p>
                </div >
            )}
        </>
    )
}

export default OrderDetails;