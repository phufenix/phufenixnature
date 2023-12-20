import Button from '../../atoms/button/button';
import styles from './buttonTextBlock.module.scss';

export default function ButtonTextBlock() {
  return (
    <>
      <section
        id="free_cons"
        className={`${styles.buttonTextBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Bezpłatna konsultacja</h3>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            Chcesz uzyskać więcej informacji o paczkomatach? Zajrzyj do naszego
            kalendarza i umów się na na{' '}
            <span className={styles.textYellow}>
              bezpłatną 15-minutową konsultację
            </span>
            .
          </p>
          <Button
            title="Sprawdź dostępne terminy"
            bgColor="#FECC00"
            fontColor="black"
            href="https://calendly.com/konieczny/15-konsultacja"
            target="_blank"
          />
        </div>
      </section>
    </>
  );
}
