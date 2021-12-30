import React from 'react';
import styles from './skill.module.css';

const Skill = () => {
    return (
        <div className={styles.skill}>
            <div className={styles.skill__icon}>
            </div>
            <h3>Название скилла</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae deserunt non.</p>
        </div>
    );
};

export default Skill;