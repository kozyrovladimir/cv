import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <div className={styles.footer__title}>
                    <h3>Владимир Козыро</h3>
                </div>
                <div className={styles.footer__socialТetworks}>
                    <div className={styles.footer__socialТetworksItem}>
                        <a href="#">VK</a>
                    </div>
                    <div className={styles.footer__socialТetworksItem}>
                        <a href="#">Inst</a>
                    </div>
                    <div className={styles.footer__socialТetworksItem}>
                        <a href="#">GitHub</a>
                    </div>
                    <div className={styles.footer__socialТetworksItem}>
                        <a href="#">Link</a>
                    </div>
                </div>
                <div className={styles.footer__copyright}>
                    <span>Все права защищены. 2022.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;