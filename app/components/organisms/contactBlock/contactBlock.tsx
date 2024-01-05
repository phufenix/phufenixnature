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
          Skontaktuj się z nami, aby uzyskać więcej informacji! Jesteśmy do Twojej dyspozycji poprzez e-mail <a href="email:phufenix.nature@gmail.com">phufenix.nature@gmail.com</a> oraz telefon <a href="tel:502575552"> +48502575552</a>. W razie pytań lub zapytań handlowych, prosimy o bezpośredni kontakt pod poniższymi danymi. Ze względu na duże zainteresowanie, czas odpowiedzi może wynieść do 48 godzin roboczych. Warto również zaznaczyć, że pełną ofertę możemy przesłać na Twój adres e-mail.
          </p>
        </div>
      </section>
    </>
  );
}
