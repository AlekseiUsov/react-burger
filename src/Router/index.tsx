import { Routes, Route, useLocation } from 'react-router-dom';

import AppHeader from '../components/app-header/app-header';
import IngredientDetailsCard from '../components/ingredient-details-card/ingredient-details-card';
import Modal from '../components/modal-window/modal-window';
import { OrderCardModal } from '../components/order-card/order-card-modal/order-card-modal';
import OrderDetails from '../components/order-details/order-details';
import { ProtectedRouteElement } from '../components/protected-route-element/protected-route-element';
import { UnProtectedRouteElement } from '../components/unprotected-route-element/unprotected-route-element';
import { FeedPage } from '../pages/feed-page/feed-page';
import { ForgotPasswordPage } from '../pages/forgot-password-page/forgot-password-page';
import { HomePage } from '../pages/home-page/home-page';
import { LoginPage } from '../pages/login-page/login-page';
import { ProfilePage } from '../pages/profile/profile';
import ProfileInfo from '../pages/profile/profile-info/profile-info';
import { ProfileOrdersPage } from '../pages/profile/profile-orders/profile-orders';
import { RegisterPage } from '../pages/register-page/register-page';
import { ResetPasswordPage } from '../pages/reset-password-page/reset-password-page';



export const Router = () => {
    const location = useLocation();
    const background = location.state && location.state.background;

    return (
        <div>
            <AppHeader />
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path="ingridients/:id" element={<IngredientDetailsCard />} />
                <Route path="/order" element={<ProtectedRouteElement element={<Modal>
                    <OrderDetails />
                </Modal>
                } />}
                />

                <Route path="/feed" element={<FeedPage />} />
                <Route path="/feed/:number" element={<ProtectedRouteElement element={<OrderCardModal />} />} />


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
        </div>

    )
}
