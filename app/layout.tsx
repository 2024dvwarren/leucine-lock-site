import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.leucinelockdx.com'),
  title: 'Leucine Lock DX | Sensitive Biosensor Technology',
  description:
    'LeucineLockDX develops biotechnology and medical-device platforms for sensitive, rapid diagnostics.',
  icons: { icon: '/icon.png' },
  openGraph: {
    title: 'Leucine Lock DX | Sensitive Biosensor Technology',
    description: 'Powering sensitive and rapid biosensors.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Leucine Lock DX — Powering sensitive and rapid biosensors.' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leucine Lock DX | Sensitive Biosensor Technology',
    description: 'Powering sensitive and rapid biosensors.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
