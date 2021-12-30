import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <div className={`wrapper ${styles.navigation__box}`}>
                <ul className={styles.navigation__list}>
                    <li><a className={styles.navigation__linkItem} href="#">Главная</a></li>
                    <li><a className={styles.navigation__linkItem} href="#">Скиллы</a></li>
                    <li><a className={styles.navigation__linkItem} href="#">Работы</a></li>
                    <li><a className={styles.navigation__linkItem} href="#">Контакты</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;