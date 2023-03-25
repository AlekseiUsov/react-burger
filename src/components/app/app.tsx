import styles from './app.module.css'
import { useEffect } from 'react';
import { Router } from '../../Router';
import { useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';
import { getIngredients } from '../../services/actions/ingridients';


const App = () => {
    const dispatch = useDispatch();
    const { ingridients } = useSelector((store) => store.ingridients);

    useEffect(() => {
        dispatch(getIngredients())
    }, [useDispatch])

    return (
        <div className="App">
            {!ingridients
                ? null
                : <Router />
            }
        </div >
    );
}

export default App;
