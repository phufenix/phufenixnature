import { Pivot as Hamburger } from 'hamburger-react';
import MenuList from '../../molecules/menuList/menuList';
import styles from './menu.module.scss';

interface Props {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu(props: Props) {
  return (
    <>
      <menu>
        <div className={`${styles.hamburgerMenu} relative`}>
          <Hamburger toggled={props.isOpen} toggle={props.toggle} />
        </div>
        <MenuList isOpen={props.isOpen} toggle={props.toggle} />
      </menu>
    </>
  );
}
