import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Almarai } from 'next/font/google';
import { Header, Footer } from '@/shared';

import './globals.css';

const almarai = Almarai({
  variable: '--font-almarai',
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
  display: 'swap', // Optimize font loading
});

export const metadata: Metadata = {
  title: 'Tadarab - Online Learning Platform',
  description:
    'Tadarab is a comprehensive online learning platform offering courses, training, and educational resources.',
  keywords: 'online learning, courses, education, training, tadarab',
  authors: [{ name: 'Tadarab Team' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Tadarab - Online Learning Platform',
    description:
      'Tadarab is a comprehensive online learning platform offering courses, training, and educational resources.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://staging-api.tadarab.com" />
        <link rel="preconnect" href="https://api.tadarab.com" />
        <link rel="preconnect" href="https://s3.me-south-1.amazonaws.com" />
        <link rel="preconnect" href="https://s3-us-west-2.amazonaws.com" />
        <link rel="preconnect" href="https://tadarab.s3.us-west-2.amazonaws.com" />
        <link rel="preconnect" href="https://avatar.iran.liara.run" />

        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="//staging-api.tadarab.com" />
        <link rel="dns-prefetch" href="//api.tadarab.com" />
        <link rel="dns-prefetch" href="//s3.me-south-1.amazonaws.com" />
        <link rel="dns-prefetch" href="//s3-us-west-2.amazonaws.com" />
        <link rel="dns-prefetch" href="//tadarab.s3.us-west-2.amazonaws.com" />
        <link rel="dns-prefetch" href="//avatar.iran.liara.run" />
      </head>
      <body className={`${almarai.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
