import styles from './footer.module.scss';
export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={` ${styles.footerWrapper} mx-auto px-4 py-3`}>
        <p className={styles.text}>
          Copyright © 2023 PHU FENIX. Wszelkie prawa zastrzeżone
        </p>
        <div>
        </div>
      </div>
    </footer>
  );
}
