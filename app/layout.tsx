import type { Metadata } from 'next';
import './globals.css';
import './responsive.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://leucinelockdx.com'),
  title: { default: 'Leucine Lock DX | Amplifying Biosensors', template: '%s | Leucine Lock DX' },
  description: 'Leucine Lock DX is developing rapid, sensitive biosensors with tunable kinetics, flexible readouts, and enzyme-powered signal amplification.',
  icons: { icon: '/icon.png' },
  openGraph: { title: 'Leucine Lock DX', description: 'Powering sensitive and rapid biosensors.', images: ['/og.png'], type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
