import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import { cn } from '@/lib';
import Providers from './providers';

const gabarito = Gabarito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Bryan Portfolio',
    template: '%s | Bryan Portfolio',
  },
  openGraph: {
    title: `Bryan Portfolio`,
    description: 'Bleeding Edge Techs with NEXT App',
    siteName: `Bryan Portfolio`,
    url: 'https://bnext-portfolio.vercel.app/',
  },
  description: 'Bleeding Edge with NEXT APP',
  metadataBase: new URL('https://bnext-portfolio.vercel.app/'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(gabarito.className)}>
        <Providers>
          <main className="max-w-[18rem] md:max-w-2xl lg:max-w-4xl mx-auto overflow-hidden">
            <Header />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
