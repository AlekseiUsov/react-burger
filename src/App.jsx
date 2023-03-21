import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import AppHeader from './components/app-header/app-header';

import { HomePage } from './pages/home-page/home-page';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ResetPasswordPage } from './pages/reset-password-page/reset-password-page';
import { ForgotPasswordPage } from './pages/forgot-password-page/forgot-password-page';
import { ProfilePage } from './pages/profile/profile';
import { ProfileOrdersPage } from './pages/profile/profile-orders/profile-orders';

import { FeedPage } from './pages/orders-page/feed-page';
import IngredientDetailsCard from './components/ingredient-details-card/ingredient-details-card';
import { ProtectedRouteElement } from './components/protected-route-element/protected-route-element';
import { UnProtectedRouteElement } from './components/unprotected-route-element/unprotected-route-element';
import ProfileInfo from './pages/profile/profile-info/profile-info';
import Modal from './components/modal-window/modal-window';
import OrderDetails from './components/order-details/order-details';
import { OrderCardModal } from './components/order-card/order-card-modal/order-card-modal';
import { useEffect } from 'react';
import { useDispatch } from './services/typesOfStoreAndThunk';
import { getIngredients } from './services/actions/ingridients';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const background = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className="App">
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="ingridients/:id" element={<IngredientDetailsCard />} />
        <Route element={<ProtectedRouteElement path="/order" element={<Modal>
          <OrderDetails />
        </Modal>
        } />}
        />

        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:number" element={<Modal />} />


        <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>
          <Route path="/profile" element={<ProfileInfo />} />
          <Route path=":orders" element={<ProfileOrdersPage />} />
        </Route>


        <Route path="/login" element={<UnProtectedRouteElement element={<LoginPage />} />} />
        <Route path="/register" element={<UnProtectedRouteElement element={<RegisterPage />} />} />
        <Route path="/forgot-password" element={<UnProtectedRouteElement element={<ForgotPasswordPage />} />} />
        <Route path="/reset-password" element={<UnProtectedRouteElement element={<ResetPasswordPage />} />} />

      </Routes>
      {background &&
        <Routes>
          <Route path="/order" element={<ProtectedRouteElement element={<Modal>
            <OrderDetails />
          </Modal>
          } />}
          />
          <Route path="/feed/:number" element={
            <OrderCardModal />
          } />
          <Route path="ingridients/:id" element={<Modal title={'Детали ингридиента'}>
            <IngredientDetailsCard />
          </Modal>}
          />
        </Routes>
      }
    </div >
  );
}

export default App;
