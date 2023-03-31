import { FC } from 'react';
import styles from './order-images.module.css';


interface IOrderImages {
    icons: Array<string>
}

export const OrderImages: FC<IOrderImages> = (data) => {
    const { icons } = data;
    const flag = icons.length > 5;
    const difference = icons.length - 5;

    return (
        <div className={styles.icons_wrapper}>
            {icons
                .map((icon, index) => (
                    index < 5 ?
                        <div
                            key={index}
                            className={styles.icon}
                            style={{
                                zIndex: icons.length - index,
                                left: index * 45
                            }}>
                            <img src={icon} />
                        </div>
                        : null
                ))
            }
            {flag && (
                <div className={styles.last_icon}>
                    <div
                        className={styles.icon}
                        style={{
                            zIndex: 1,
                            left: 5 * 45,
                            opacity: 0.3,
                        }}>
                        <img src={icons[5]} />
                    </div>
                    <span className={styles.number}>
                        {`+${difference}`}
                    </span>
                </div>
            )}
        </div >
    )
}