import React from 'react';
import styles from './remoteWork.module.css';

const RemoteWork = () => {
    return (
        <div className={styles.remoteWork}>
            <div className={`wrapper ${styles.remoteWork__box}`}>
                <h3 className={styles.remoteWork__title}>Рассматриваю варианты удаленной работы</h3>
                <div>
                    <button className={styles.remoteWork__button}>Нанять меня</button>
                </div>
            </div>
        </div>
    );
};

export default RemoteWork;