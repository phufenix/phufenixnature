import styles from './iconListBlock.module.scss';
import smLogo from '../../../assets/logo/SM.jpg';
import profbudLogo from '../../../assets/logo/Profbud.jpg';
import citroenLogo from '../../../assets/logo/Citroen.jpg';
import mcdonaldsLogo from '../../../assets/logo/McDonalds.jpg';
import dominosLogo from '../../../assets/logo/DominosPizza.jpg';
import Image from 'next/image';
export default function IconListBlock() {
  return (
    <>
      <section
        id="they_trusted_us"
        className={`${styles.iconListBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Zaufali nam</h3>
        </div>
        <div className={styles.iconListWrapper}>
          <div className={styles.iconListWrapperItem}>
            <Image className={styles.iconListWrapperItem_img} src={smLogo} alt="SM Walcz o siebie<" />
            <div className={styles.textWrapper}>
              <p className={styles.title}>SM Walcz o siebie</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.iconListWrapperItem}>
            <Image className={styles.iconListWrapperItem_img} src={profbudLogo} alt="Profbud" />
            <div className={styles.textWrapper}>
              <p className={styles.title}>Profbud</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.iconListWrapperItem}>
            <Image className={styles.iconListWrapperItem_img} src={citroenLogo} alt="Citroen" />
            <div className={styles.textWrapper}>
              <p className={styles.title}>Citroen</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.iconListWrapperItem}>
            <Image className={styles.iconListWrapperItem_img} src={mcdonaldsLogo} alt="Mcdonalds" />
            <div className={styles.textWrapper}>
              <p className={styles.title}>Mcdonald’s</p>
              <span className={styles.description}></span>
            </div>
          </div>
          <div className={styles.iconListWrapperItem}>
            <Image className={styles.iconListWrapperItem_img} src={dominosLogo} alt="Dominos Pizza" />
            <div className={styles.textWrapper}>
              <p className={styles.title}>Domino’s Pizza</p>
              <span className={styles.description}></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
