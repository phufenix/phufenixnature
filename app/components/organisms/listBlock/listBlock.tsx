import styles from './listBlock.module.scss';

export default function ListBlock() {
  return (
    <>
      <section
        id="as_we_plan"
        className={`${styles.listBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Jak planujemy kampanię?</h3>
        </div>
        <div className={styles.listWrapper}>
          <div className={styles.listWrapperItem}>
            <span className={styles.number}>01</span>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Wspólnie ustalamy cel kampanii</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.listWrapperItem}>
            <span className={styles.number}>02</span>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Wybieramy najlepsze lokalizacje zgodnie z założonymi celami</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.listWrapperItem}>
            <span className={styles.number}>03</span>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Projektujemy kreację graficzną i zatwierdzamy ją</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.listWrapperItem}>
            <span className={styles.number}>04</span>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Start kampanii</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.listWrapperItem}>
            <span className={styles.number}>05</span>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Zakończenie kampanii i raport</p>
              <span className={styles.description}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
