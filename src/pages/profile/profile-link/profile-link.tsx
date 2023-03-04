import styles from './profile-link.module.css';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

interface IProfileLink {
    onClick?: () => void;
    text: string;
    path: string;
}


const ProfileLink: FC<IProfileLink> = ({ onClick, text, path }) => {

    return (
        <NavLink
            end
            to={path}
            onClick={onClick}
            style={{ textDecoration: 'none' }}
            className={({ isActive }) =>
                `${styles.link} p-4 ${isActive ? styles.active : ''}`
            }>
            <p>{text}</p>
        </NavLink>
    )
}

export default ProfileLink;