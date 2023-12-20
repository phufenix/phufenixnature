'use client';
import Button from '../components/atoms/button/button';
import styles from './thankspage.module.scss';

export default function ThanksPage() {
  return (
    <>
      <section
        className={`${styles.thanksSection} container mx-auto px-2 lg:px-10 pt-28 lg:pt-44`}
      >
        <h1 className={styles.thanksSection_title}>Dziękujemy za kontakt!</h1>
        <p className={styles.thanksSection_text}>
          Twój formularz został wysłany. Odpowiemy wkótce.
        </p>
        <div className={styles.thanksSection_buttonWrapper}>
          <Button
            title="Powrót do strony głównej"
            bgColor="#8FBC8F"
            fontColor="black"
            href="/"
            target="_self"
          />
        </div>
      </section>
    </>
  );
}
