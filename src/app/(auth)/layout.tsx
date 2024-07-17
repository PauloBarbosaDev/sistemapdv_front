import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import '../../../styles/globals.css';
import { Toaster } from '../components/ui/toaster';

const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Sistema PDV',
  description: 'Sistema PDV Por Paulo Barbosa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={openSans.className}>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
