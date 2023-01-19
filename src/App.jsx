import './App.css';
import React, { useState, useEffect } from 'react';
import AppHeader from './components/app-header/app-header'

import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import BurgerIngredientsGroup from './components/burgerIngredients-group/burger-ingredients'
import BurgerIngredientCard from './components/burger-ingredient-card/burger-ingredient-card'

import BurgerConstructor from './components/burger-constructor/burger-constructor'
import BurgerConstructorList from './components/burger-constructor-list/burger-constructor-list'
import BurgerConstructorItem from './components/burger-constructor-item/burger-constructor'
import BurgerConstructorTotal from './components/burger-constructor-total/burger-constructor-total'

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const api = `https://norma.nomoreparties.space/api`;

const App = () => {
  const [state, setState] = useState({
    succes: false,
    data: []
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(`${api}/ingredients`);
        const json = await resp.json();
        setState({ data: json.data, succes: true });
      } catch (err) {
        alert(`При загрузке данных произошла ошибка: ${err}`)
      }
    }
    getData()
  }, []);
  console.log(state.data)

  return (
    <div className="App">
      <AppHeader />
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 100px', }}>
        <BurgerIngredients title={'Соберите бургер'} >
          <BurgerIngredientsGroup title={'Булки'}>
            {state.data
              .filter((ingridient) => ingridient.type === 'bun')
              .map((ingridient) => (
                <BurgerIngredientCard key={ingridient._id}
                  _id={ingridient._id}
                  type={ingridient.type}
                  name={ingridient.name}
                  image={ingridient.image}
                  image_large={ingridient.image_large}
                  image_modile={ingridient.image_mobile}
                  fat={ingridient.fat}
                  proteins={ingridient.proteins}
                  carbohydrates={ingridient.carbohydrates}
                  price={ingridient.price}
                  ingridient={ingridient.calories}
                  calories={ingridient.calories}
                />
              ))}
          </BurgerIngredientsGroup>
          <BurgerIngredientsGroup title={'Соусы'}>
            {state.data
              .filter((ingridient) => ingridient.type === 'sauce')
              .map((ingridient) => (
                <BurgerIngredientCard
                  _id={ingridient._id}
                  type={ingridient.type}
                  name={ingridient.name}
                  image={ingridient.image}
                  image_large={ingridient.image_large}
                  image_modile={ingridient.image_mobile}
                  fat={ingridient.fat}
                  proteins={ingridient.proteins}
                  carbohydrates={ingridient.carbohydrates}
                  price={ingridient.price}
                  ingridient={ingridient.calories}
                  calories={ingridient.calories}
                />
              ))}
          </BurgerIngredientsGroup>
          <BurgerIngredientsGroup title={'Начинки'}>
            {state.data
              .filter((ingridient) => ingridient.type === 'main')
              .map((ingridient) => (
                <BurgerIngredientCard
                  _id={ingridient._id}
                  type={ingridient.type}
                  name={ingridient.name}
                  image={ingridient.image}
                  image_large={ingridient.image_large}
                  image_modile={ingridient.image_mobile}
                  fat={ingridient.fat}
                  proteins={ingridient.proteins}
                  carbohydrates={ingridient.carbohydrates}
                  price={ingridient.price}
                  ingridient={ingridient.calories}
                  calories={ingridient.calories}
                />
              ))}
          </BurgerIngredientsGroup>
        </BurgerIngredients>
        <BurgerConstructor style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
          />
          <BurgerConstructorList>
            {state.data
              .filter((ingridient) => ingridient.type !== 'bun')
              .map((ingridient) => (
                <BurgerConstructorItem>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    key={ingridient._id}
                    thumbnail={ingridient.image}
                    text={ingridient.name}
                    price={ingridient.price}
                  />
                </BurgerConstructorItem>
              ))}
          </BurgerConstructorList>
          <ConstructorElement extraClass='mt-4'
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={`https://code.s3.yandex.net/react/code/bun-01.png`}
          />
          <BurgerConstructorTotal
            text="610"
            icon={<CurrencyIcon type="primary" />}
          />
        </BurgerConstructor>
      </div >
    </div >
  );
}

export default App;
