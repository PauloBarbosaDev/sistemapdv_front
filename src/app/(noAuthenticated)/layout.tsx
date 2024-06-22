import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../../../styles/globals.scss';
import Header from '@/components/homeNoAuth/Header/Header';
import Footer from '@/components/homeNoAuth/Footer/Footer';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Sistema PDV',
  description: 'Sistema PDV Por Paulo Barbosa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
