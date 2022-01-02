import React from 'react';
import styles from './work.module.css';

const Work = () => {
    return (
        <div className={styles.work}>
            <div className={styles.work__img}>
                <a className={styles.work__button} href="#">Смотреть</a>
            </div>
            <div className={styles.work__info}>
                <h3>Название проекта</h3>
                <p>Краткое описание</p>
            </div>
        </div>
    );
};

export default Work;