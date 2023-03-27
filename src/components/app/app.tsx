import { useEffect } from 'react';
import { Router } from '../../Router';
import { useDispatch, useSelector } from '../../services/typesOfStoreAndThunk';
import { getIngredients } from '../../services/actions/ingridients';
import { getUserData } from '../../services/actions/routers/get-profile-data';


const App = () => {
    const dispatch = useDispatch();
    const { ingridients } = useSelector((store) => store.ingridients);

    useEffect(() => {
        dispatch(getIngredients())
        dispatch(getUserData())
    }, [dispatch])

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
