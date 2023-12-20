"use client"
import Image from 'next/image';
import styles from './imageBlock.module.scss';
import kosz from '../../../../public/gallery/raffia.jpg';
import { HiArrowCircleDown } from "react-icons/hi";
import { useEffect, useState } from 'react';

export default function ImageBlock() {
  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    const aboutAsSection = document.getElementById("about_as");
    aboutAsSection?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className={`${styles.imageBlock}`}>
        <div className={`${styles.imageWrapper}`}>
          <div className={`${styles.textWrapper}`}>Oryginalne produkty z Madagaskaru</div>
          <div className={styles.overlay}></div>
          <Image
            className={`${styles.imageWrapper_image}`}
            src={kosz}
            alt="kosz"
          />
        </div>
        <div  className={`${styles.iconWrapper} ${isScrolled ? styles.hidden : ''}`}>
          <HiArrowCircleDown className={`${styles.arrowIcon}`} size={70}  onClick={handleScrollDown}  />
        </div>
      </div>
    </>
  );
}