import styles from './ingredient-details-card.module.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../services/typesOfStoreAndThunk';
import { ICardTypes } from '../../../utils/propsType';
import { GET_CURRENT_INGRIDIENT } from '../../../services/actions/current-ingridient';


const IngredientDetailsCard = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { ingridients, isLoading } = useSelector(store => store.ingridients);
    const { currentIngridient } = useSelector(store => store.currentIngridient);
    const current = ingridients.find((ingredient: ICardTypes) => ingredient._id === id)

    React.useEffect(() => {
        if (current) {
            dispatch({ type: GET_CURRENT_INGRIDIENT, current })
        }
    }, [dispatch, current]);



    return (
        <>
            {isLoading && currentIngridient === null ? <h1> Подождите, идет загрузка ...</h1 > : (
                <div className={`${styles.wrapper} mt-4`}>
                    <div>
                        <img src={currentIngridient?.image_large} />
                    </div>
                    <h2 className={`${styles.subtitle} mt-4`}>{currentIngridient?.name}</h2>
                    <div className={`${styles.block} mt-8`}>
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Калории, ккал</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentIngridient?.calories}</p>
                        </div >
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Белки, г</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentIngridient?.proteins}</p>
                        </div>
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Жиры, г</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentIngridient?.fat}</p>
                        </div>
                        <div className={`${styles.inner} mr-5`}>
                            <p className={styles.text}>Углеводы, г</p>
                            <p className={`${styles.text} ${styles.num}`}>{currentIngridient?.carbohydrates}</p>
                        </div>
                    </div >
                </div >
            )
            }
        </>
    )
}

export default IngredientDetailsCard