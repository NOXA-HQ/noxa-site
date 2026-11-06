import type { Metadata } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Motion } from '@/components/Motion';
import { company } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL('https://noxasoftwares.com'),
  title: { default: `${company.name} — ${company.motto}`, template: `%s · ${company.name}` },
  description: company.description,
  openGraph: { siteName: company.name, type: 'website', locale: 'en_GB' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Lets the CSS hide scroll-reveal content only when JavaScript can reveal it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
