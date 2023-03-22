import styles from './order-card-modal.module.css';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getCurrentOrder } from '../../../services/actions/current-order';
import { RootState, useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk';
import Modal from '../../modal-window/modal-window';
import { OrderCardDetails } from '../order-card-details/order-card-datails';



export const OrderCardModal = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const state = location.state;
    const { number = '' } = useParams();
    const { order } = useSelector((store: RootState) => store.currentOrder);


    useEffect(() => {
        dispatch(getCurrentOrder(number))
    }, [dispatch, number]);

    return (
        <>
            {!order ? (
                <h1>Пожайлуста подождите...</h1>
            ) : (
                <>
                    {state
                        ? <Modal style={{ fontFamily: 'Iceland' }} title={`#${number}`} >
                            <OrderCardDetails order={order} />
                        </Modal>
                        : <div className={styles.wrapper}>
                            <p style={{ fontFamily: 'Iceland', fontSize: '28px' }}>{`#${number}`}</p>
                            <OrderCardDetails order={order} />
                        </div>
                    }
                </>
            )}
        </>
    )
}
