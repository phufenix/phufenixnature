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
          <div className={`${styles.textWrapper}`}>
            <h1 className={`${styles.title}`}>ORYGNALNE RĘKODZIEŁA Z MADAGASKARU <br/> SPRZEDAŻ HURTOWA</h1>
            <h2 className={`${styles.subtitle}`}>
            Witaj w Fenix Nature - Twoim zaufanym partnerze w hurtowej sprzedaży oryginalnych i ręcznych tekstyliów prosto z serca Madagaskaru.
            </h2>
          </div>
          <div className={styles.overlay}></div>
          <Image
            className={`${styles.imageWrapper_image}`}
            src={kosz}
            alt="kosz"
          />
        </div>
        <div  className={`${styles.iconWrapper}`}>
          <HiArrowCircleDown className={`${styles.arrowIcon} ${isScrolled ? styles.hidden : ''}`} size={70}  onClick={handleScrollDown}  />
        </div>
      </div>
    </>
  );
}