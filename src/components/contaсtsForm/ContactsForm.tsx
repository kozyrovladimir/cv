import React from 'react';
import styles from './contactsForm.module.css';

const ContactsForm = () => {
    return (
        <div className={styles.contactsForm}>
            <div className={`wrapper ${styles.contactsForm__box}`}>
                <h2>Контакты</h2>
                <form className={styles.contactsForm__form} action="#">
                    <input id={'name'} type="text"/>
                    <input id={'tel'} type="tel"/>
                    <textarea name="textInfo" id="textInfo" cols={36} rows={5}
                              title={'Дополнительная информация'}></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

export default ContactsForm;