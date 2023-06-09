import { IntegrationsContextProvider } from '@/context/integrationsContext';
import { Header, Sidemenu } from '@/components/layout';
import { SnackbarProvider } from '@/components/ui';

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
  title: 'Komon Dashboard',
  description: "Pedro Gardim's Tech interview :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntegrationsContextProvider>
      <html lang="en">
        <body
          className={`${euclidTriangle.variable} font-normal flex flex-col h-screen`}
        >
          <Header />
          <main className="relative container mx-auto flex-auto grow flex flex-row items-start justify-start font-euclid-triangle overflow-x-hidden">
            <SnackbarProvider>
              <Sidemenu />
              <div className="flex-auto relative flex px-8 py-5 h-full justify-start overflow-y-auto no-scrollbar">
                {children}
              </div>
            </SnackbarProvider>
          </main>
        </body>
      </html>
    </IntegrationsContextProvider>
  );
}
