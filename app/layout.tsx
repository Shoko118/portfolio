import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import { cn } from '@/lib';
import Providers from './providers';
import NextTopLoader from 'nextjs-toploader';

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
        <NextTopLoader color="#FFFFFF" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} easing="ease" speed={200} />

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
