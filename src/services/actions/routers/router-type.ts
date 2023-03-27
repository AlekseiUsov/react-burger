import { TChangeUserData } from './change-user-data'
import { TGetProfileData } from './get-profile-data'
import { TUserLogin } from './user-login';
import { TUserLogout } from './user-logout';
import { TUserRegistration } from './user-registration';

export type TRouteType =
    TChangeUserData
    | TGetProfileData
    | TUserLogin
    | TUserLogout
    | TUserRegistration
