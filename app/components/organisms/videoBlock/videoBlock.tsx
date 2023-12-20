import styles from './videoBlock.module.scss';
export default function VideoBlock() {
  return (
    <>
      <section className={styles.videoWrapper}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/test.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
