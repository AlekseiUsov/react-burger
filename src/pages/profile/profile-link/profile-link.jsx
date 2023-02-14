import styles from './profile-link.module.css';
import PropTypes from 'prop-types';

const ProfileLink = ({ isActive, onClick, text }) => {

    return (
        <div className={`
      ${styles.link} 
      p-4 
      ${isActive ? styles['active'] : styles['']}  
      `}
            onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

ProfileLink.propTypes = {
    isActive: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default ProfileLink;