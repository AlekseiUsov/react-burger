import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentOrder } from '../../../services/actions/current-order';
import { getIngredients } from '../../../services/actions/ingridients';
import { RootState, useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk';



export const OrderCardModal = (num: object) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const orderNumber = (location.pathname).split('/')[2];

    const { isLoading, orders } = useSelector((store: RootState) => store.currentOrder);
    const { ingridients } = useSelector((store: RootState) => store.ingridients);

    const currentOrder = orders[0];
    // num = {
    //     num: currentOrder.number
    // }

    // console.log(num)
    //const currentOrderIngridients = ingridients.filter((ingridient) => currentOrder.ingredients.includes(ingridient._id));
    // const totalPrice = orderIngridients.reduce((acc, ingridient) => acc + ingridient.price, 0);
    // const data = convertData(order.createdAt)


    useEffect(() => {
        dispatch(getCurrentOrder(orderNumber))
    }, [dispatch]);



    return (
        <div>
            {isLoading ? (
                <h1>Пожайлуста подождите...</h1>
            ) : (
                <h1>Все нормально</h1>
            )}
        </div>
    )
}
