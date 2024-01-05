'use client';
import { usePathname } from 'next/navigation';
import Menu from '../menu/menu';
import styles from './navbar.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface MenuItem {
  redirect: string;
  text: string;
}

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

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
    <nav
      className={`${styles.nav}  flex items-center justify-between`}
    >
      <h1 className={`${styles.navTitle}`}>Fenix<span>Nature</span></h1>
      <ul className={`${styles.menuList} hidden lg:flex`}>
      {menuItems
          ? menuItems.map((menuItem) => (
              <li
              className={`${styles.menuListItem}`}
                key={menuItem.text}
              >
                <Link href={menuItem.redirect} onClick={handleScroll}>
                  {menuItem.text}
                </Link>
              </li>
            ))
          : null}
      </ul>
      <Menu isOpen={isOpen} toggle={setOpen} />
    </nav>
  );
}
