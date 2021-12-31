import React from 'react';
import styles from './contactsForm.module.css';

const ContactsForm = () => {
    return (
        <div className={styles.contactsForm}>
            <div className={`wrapper ${styles.contactsForm__box}`}>
                <div className={styles.contactsForm__titleBox}>
                    <h2>Контакты</h2>
                </div>
                <form className={styles.contactsForm__form} action="#">
                    <div className={styles.contactsForm__formItem}>
                        <label htmlFor={'name'}>Ваше имя: </label>
                        <input id={'name'} type="text"/>
                    </div>
                    <div className={styles.contactsForm__formItem}>
                        <label htmlFor={'tel'}>Ваш телефон: </label>
                        <input id={'tel'} type="tel"/>
                    </div>
                    <div>
                        <textarea name="textInfo" id="textInfo" cols={30} rows={5} title={'Дополнительная информация'}></textarea>
                    </div>
                </form>
                <div className={styles.contactsForm__submitButtonBox}>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
};

export default ContactsForm;