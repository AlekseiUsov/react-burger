import { TChangeUserData } from './change-user-data'
import { TForgotPassword } from './forgot-password'
import { TGetProfileData } from './get-profile-data'
import { TUpdateToken } from './update-token';
import { TUserLogin } from './user-login';
import { TUserLogout } from './user-logout';
import { TUserRegistration } from './user-registration';

export type TRouteType =
    TChangeUserData
    | TForgotPassword
    | TGetProfileData
    | TUpdateToken
    | TUserLogin
    | TUserLogout
    | TUserRegistration
