import React from 'react';
import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';
import { Header } from '@/shared';

import './globals.css';

const almarai = Almarai({
  variable: '--font-almarai',
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
});

export const metadata: Metadata = {
  title: 'tadarab',
  description: 'tadarab',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
