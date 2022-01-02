import React from 'react';
import styles from './skills.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={`wrapper ${styles.skills__box}`}>
                <h2>Мои скиллы!</h2>
                <div className={styles.skills__items}>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                    <Skill/>
                </div>
            </div>
        </div>
    );
};

export default Skills;