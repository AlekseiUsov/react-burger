import { useEffect } from 'react';
import './App.css';
import { Router } from './Router';
import { getIngredients } from './services/actions/ingridients';
import { RootState, useDispatch, useSelector } from './services/typesOfStoreAndThunk';


const App = () => {
  const dispatch = useDispatch();
  const { ingridients } = useSelector((store: RootState) => store.ingridients);

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className="App">
      {!ingridients
        ? <h1>Пожайлуста, подождите...</h1>
        : <Router />
      }
    </div >
  );
}

export default App;
