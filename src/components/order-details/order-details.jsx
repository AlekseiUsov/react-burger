import styles from './order-details.module.css';
import PropTypes from 'prop-types';
import done from '../../images/done.svg';

const OrderDetails = ({ title }) => {

    return (
        <div className={`${styles.wrapper} mt-5 mb-10`}>
            <h1 className={`${styles.title} mt-15`}>{title}</h1>
            <h2 className={`${styles.subtitle} mt-8`}>идентификатор заказа</h2>
            <div className='mt-15'>
                <img src={done} />
            </div>
            <p className={styles.notification}>Ваш заказ начали готовить</p>
            <p className={styles.announcement}>Дождитесь готовности на орбитальной станции</p>
        </div >
    )
}

OrderDetails.propTypes = {
    title: PropTypes.string.isRequired,
};

export default OrderDetails;