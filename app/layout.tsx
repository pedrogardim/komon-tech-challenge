import Header from '@/components/layout/Header';
import Sidemenu from '@/components/layout/Sidemenu';

import './globals.css';
import localFont from 'next/font/local';

const euclidTriangle = localFont({
  src: [
    {
      path: '../public/fonts/EuclidTriangle-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/EuclidTriangle-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-euclid-triangle',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${euclidTriangle.variable} font-normal flex flex-col h-screen`}
      >
        <Header />
        <main className="container mx-auto flex-auto grow flex flex-row items-start justify-start">
          <Sidemenu />
          <div className="flex-auto relative flex place-items-center px-8 py-5">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}