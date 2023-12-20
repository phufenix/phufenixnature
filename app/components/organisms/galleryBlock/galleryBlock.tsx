'use client';
import { useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import photosGallery from '@/app/db/photosGallery';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import styles from './galleryBlock.module.scss';

export default function GalleryBlock() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <section
        id="gallery"
        className={`${styles.galleryBlock} container mx-auto px-2 lg:px-10 py-10 lg:py-20`}
      >
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>Galeria</h3>
        </div>
        <div className={styles.galleryWrapper}>
          <PhotoAlbum
            photos={photosGallery}
            layout="rows"
            onClick={({ index }) => setIndex(index)}
            breakpoints={[300, 600, 1200]}
          />
          <Lightbox
            slides={photosGallery}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </section>
    </>
  );
}
