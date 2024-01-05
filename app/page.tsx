import ContactBlock from './components/organisms/contactBlock/contactBlock';
import GalleryBlock from './components/organisms/galleryBlock/galleryBlock';
import ImageBlock from './components/organisms/imageBlock/imageBlock';
import TextBlock from './components/organisms/textBlock/textBlock';
import textBlocks from './db/textsBlock';
import Head from 'next/head';

export default function Home() {
  return (
    <main>
<Head>
  <title>Fenix Nature - Unikalne boho rękodzieła z Madagaskaru</title>
  <meta property="og:title" content="Fenix Nature - Unikalne boho rękodzieła z Madagaskaru - torby, kosze, lampy, klosze." />
</Head>
      <ImageBlock/>
      {textBlocks.map((data) => (
        <TextBlock
          key={data.id}
          title={data.title}
          text={data.text}
          id={data.id}
        />
      ))}
      <GalleryBlock />
      <ContactBlock />
    </main>
  );
}
