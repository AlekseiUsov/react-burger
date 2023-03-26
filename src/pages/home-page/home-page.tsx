import styles from './home-page.module.css';
import { useEffect } from 'react';

import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'

import { useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { getUserData } from '../../services/actions/routers/get-profile-data';

export const HomePage = () => {
    const { ingridients, isLoading } = useSelector((store) => store.ingridients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch])

    return (
        <div>
            {isLoading ? null
                : <div className={styles.wrapper}>
                    <DndProvider backend={HTML5Backend}>
                        <BurgerIngredients title={'Соберите бургер'} ingredients={ingridients} />
                        <BurgerConstructor />
                    </DndProvider>
                </div >
            }
        </div>
    );
}


