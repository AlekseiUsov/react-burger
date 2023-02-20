import './App.css';
import { useEffect } from 'react';
import AppHeader from './components/app-header/app-header'

import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import BurgerConstructor from './components/burger-constructor/burger-constructor'

import { getIngredients } from './services/actions/ingridients'
import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  const dispatch = useDispatch();
  const { ingridients, isLoading } = useSelector(store => store.ingridients);

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);


  return (
    <div className="App" >
      <AppHeader />
      {isLoading ? (
        <h1>Пожайлуста, подождите ...</h1>
      ) : (
        < div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 100px', }}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients title={'Соберите бургер'} ingridients={ingridients} />
            <BurgerConstructor />
          </DndProvider>
        </div >
      )}
    </div>
  );
}

export default App;
