import React from 'react';
import styles from './myWorks.module.css';
import Work from "./work/Work";

const MyWorks = () => {
    return (
        <div className={styles.myWorks}>
            <div className={`wrapper ${styles.myWorks__box}`}>
                <h2 className={styles.myWorks__title}>Мои работы</h2>
                <div className={styles.myWorks__cards}>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

export default MyWorks;