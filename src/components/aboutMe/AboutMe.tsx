import React from 'react';
import styles from './aboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={styles.aboutMe}>
            <div className={`wrapper ${styles.aboutMe__box}`}>
                <div className={styles.aboutMe__info}>
                    <p>Привет!</p>
                    <p>Меня зовут Владимир Козыро</p>
                    <h2>Я front-end разработчик</h2>
                </div>
                <div className={styles.aboutMe__photo}>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;