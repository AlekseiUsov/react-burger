import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getCurrentOrder } from '../../../services/actions/current-order';
import { useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk';
import Modal from '../../modal-window/modal-window';
import { OrderCardDetails } from '../order-card-details/order-card-datails';


export const OrderCardModal = () => {
    const dispatch = useDispatch();
    const { number = '' } = useParams();
    const { order } = useSelector((store) => store.currentOrder);
    const location = useLocation();

    useEffect(() => {
        dispatch(getCurrentOrder(number))
    }, [dispatch, number]);

    return (
        <>
            {!order
                ? null
                : <Modal style={{ fontFamily: 'Iceland' }} title={`# ${order.number}`} >
                    <OrderCardDetails order={order} />
                </Modal>
            }
        </>
    )
}