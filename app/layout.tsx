import Footer from './components/organisms/footer/footer';
import Navbar from './components/organisms/navbar/navbar';
import './globals.scss';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fenix Nature - Unikalne Rękodzieła z Madagaskaru',
  description: 'Fenix Nature - Unikalne Rękodzieła z Madagaskaru - torby, kosze, lampy, klosze',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
