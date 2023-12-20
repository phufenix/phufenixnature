import styles from './textBlock.module.scss';

interface TextBlockProps {
  title: string;
  text: string;
  id: string;
}

export default function TextBlock(props: TextBlockProps) {
  const { title, text, id } = props;
  return (
    <>
      <section
        id={id}
        className={`${styles.textBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div
          className={styles.textWrapper}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </section>
    </>
  );
}
