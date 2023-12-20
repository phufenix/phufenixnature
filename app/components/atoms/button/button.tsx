import styles from './button.module.scss';

interface ButtonProps {
  title: string;
  href: string;
  bgColor: string;
  fontColor: string;
  target: string;
}

export default function Button(props: ButtonProps) {
  const { title, bgColor, fontColor, href, target } = props;
  const buttonStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    color: fontColor,
  };
  return (
    <>
      <a
        href={href}
        className={styles.button}
        style={buttonStyle}
        target={target ? target : '_blank'}
      >
        {title}
      </a>
    </>
  );
}
