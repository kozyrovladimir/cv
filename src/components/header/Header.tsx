import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <div className={`wrapper ${styles.navigation__box}`}>
                <ul className={styles.navigation__list}>
                    <li className={styles.navigation__linkItem}><a href="#">Главная</a></li>
                    <li className={styles.navigation__linkItem}><a href="#">Скиллы</a></li>
                    <li className={styles.navigation__linkItem}><a href="#">Работы</a></li>
                    <li className={styles.navigation__linkItem}><a href="#">Контакты</a></li>
                    <li className={styles.navigation__linkItem}><a href="#">Контакты</a></li>
                    <li className={styles.navigation__linkItem}><a href="#">Контакты</a></li>
                    <li className={styles.navigation__linkItem}><a href="#">Контакты</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;