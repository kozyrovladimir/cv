import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <h3>Владимир Козыро</h3>
                <div className={styles.footer__socialNetworks}>
                    <div className={styles.footer__socialNetworksItem}>
                        <a href="#">VK</a>
                    </div>
                    <div className={styles.footer__socialNetworksItem}>
                        <a href="#">Inst</a>
                    </div>
                    <div className={styles.footer__socialNetworksItem}>
                        <a href="#">GitHub</a>
                    </div>
                    <div className={styles.footer__socialNetworksItem}>
                        <a href="#">Link</a>
                    </div>
                </div>
                <span>Все права защищены. 2022.</span>
            </div>
        </footer>
    );
};

export default Footer;