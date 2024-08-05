import { Routes, Route, useLocation } from "react-router-dom";

import AppHeader from "../components/header/header";
import IngredientDetailsCard from "../components/ingredient-details-card/ingredient-details-card";
import Modal from "../components/modal-window/modal-window";
import { OrderCardModal } from "../components/order-card/order-card-modal/order-card-modal";
import { OrderCardPage } from "../components/order-card/order-card-page/order-card-page";
import OrderDetails from "../components/order-details/order-details";
import { ProtectedRouteElement } from "../components/protected-route-element/protected-route-element";
import { FeedPage } from "../pages/feed-page/feed-page";
import { ForgotPasswordPage } from "../pages/forgot-password-page/forgot-password-page";
import { HomePage } from "../pages/home-page/home-page";
import { LoginPage } from "../pages/login-page/login-page";
import { ProfilePage } from "../pages/profile/profile";
import { ProfileInfo } from "../pages/profile/profile-info/profile-info";
import { ProfileOrdersPage } from "../pages/profile/profile-orders/profile-orders";
import { RegisterPage } from "../pages/register-page/register-page";
import { ResetPasswordPage } from "../pages/reset-password-page/reset-password-page";

export const Router = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="ingridients/:id" element={<IngredientDetailsCard />} />

        <Route path="/feed" element={<FeedPage />} />
        <Route path="/feed/:number" element={<OrderCardPage />} />

        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        >
          <Route path="/profile" element={<ProfileInfo />} />
          <Route path=":orders" element={<ProfileOrdersPage />} />
        </Route>

        <Route
          path="/profile/orders/:number"
          element={<ProtectedRouteElement element={<OrderCardPage />} />}
        />

        <Route
          path="/login"
          element={<ProtectedRouteElement unAuth element={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<ProtectedRouteElement unAuth element={<RegisterPage />} />}
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRouteElement unAuth element={<ForgotPasswordPage />} />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRouteElement unAuth element={<ResetPasswordPage />} />
          }
        />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/order"
            element={
              <Modal>
                <OrderDetails />
              </Modal>
            }
          />
          <Route path="/feed/:number" element={<OrderCardModal />} />

          <Route path="/profile/orders/:number" element={<OrderCardModal />} />
          <Route
            path="ingridients/:id"
            element={
              <Modal title={"Детали ингридиента"}>
                <IngredientDetailsCard />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};
