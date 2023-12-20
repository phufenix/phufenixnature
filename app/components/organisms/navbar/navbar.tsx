'use client';
import Menu from '../menu/menu';
import styles from './navbar.module.scss';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <nav
      className={`${styles.nav}  flex items-center justify-end mx-auto px-2 py-1 lg:px-10 fixed left-0 right-0 top-0`}
    >
      <Menu isOpen={isOpen} toggle={setOpen} />
    </nav>
  );
}
