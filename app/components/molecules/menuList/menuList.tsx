import Link from 'next/link';
import styles from '../menuList/menuList.module.scss';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

interface Props {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuItem {
  redirect: string;
  text: string;
}

export default function MenuList(props: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const menuItems: MenuItem[] = [
    {
      redirect: '#about_as',
      text: 'O nas',
    },
    {
      redirect: '#gallery',
      text: 'Galeria',
    },
    {
      redirect: '#contact',
      text: 'Kontakt',
    },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    let hrefTarget = e.currentTarget.href;
    e.preventDefault();
    if (pathname === '/thanks') {
      router.push('/');
    }
    setTimeout(() => {
      const href = hrefTarget;
      const targetId = href.replace(/.*\#/, '');
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 1000);
  };

  return (
    <>
      <ul
        className={`${styles.menuList} ${
          props.isOpen ? styles.show : styles.hide
        }`}
      >
        {menuItems
          ? menuItems.map((menuItem) => (
              <li
                key={menuItem.text}
                onClick={() => {
                  props.toggle((state) => !state);
                }}
              >
                <Link href={menuItem.redirect} onClick={handleScroll}>
                  {menuItem.text}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}
