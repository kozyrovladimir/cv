import React from 'react';
import styles from './remoteWork.module.css';

const RemoteWork = () => {
    return (
        <div className={styles.remoteWork}>
            <div className={`wrapper ${styles.remoteWork__box}`}>
                <div className={styles.remoteWork__title}>
                    <h3>Рассматриваю варианты удаленной работы</h3>
                </div>
                <div>
                    <button className={styles.remoteWork__button} >Нанять меня</button>
                </div>
            </div>
        </div>
    );
};

export default RemoteWork;