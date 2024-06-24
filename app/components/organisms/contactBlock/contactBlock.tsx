'use client';
import styles from './contactBlock.module.scss';

export default function ContactBlock() {
  return (
    <>
      <section
        id="contact"
        className={`${styles.contactBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Kontakt</h3>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
          Skontaktuj się z nami a wyślemy Ci pełną ofertę. Jesteśmy do Twojej dyspozycji poprzez e-mail <a href="email:phufenix.nature@gmail.com">phufenix.nature@gmail.com</a> oraz telefon <a href="tel:502575552"> +48 502 575 552</a>. W razie zapytań handlowych bądź chęci zapoznania się z naszą pełną ofertą - prosimy o bezpośredni kontakt pod powyższymi danymi.
          </p>
        </div>
      </section>
    </>
  );
}
