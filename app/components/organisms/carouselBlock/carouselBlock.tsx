'use client';

import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import carouselItems from '@/app/db/carouselItems';
import styles from './carouselBlock.module.scss';

export default function CarouselBlock() {
  return (
    <>
      <section className={styles.carouselSection}>
        <div className={styles.carouselSection_shadow}></div>
        <h1 className={styles.carouselSection_title}>
          Naturalne kosze <br /> HURT
        </h1>
        <Carousel
          className={styles.carouselSection_carousel}
          nextIcon={null}
          prevIcon={null}
        >
          {carouselItems.length > 0 ? carouselItems.map((item) => (
            <Carousel.Item key={item.id}>
              <Image
                className={styles.carouselSection_carousel__image}
                src={item.img}
                alt={item.alt}
              />
            </Carousel.Item>
          )) : <p>Gallery is empty</p>}
        </Carousel>
      </section>
    </>
  );
}
