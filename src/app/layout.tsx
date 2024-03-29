import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Next agency',
    template: '%s'
  },
  description: 'Home page of creative thoughts agency',
  icons: {
    icon: '/icon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>
        <div className='main-container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
