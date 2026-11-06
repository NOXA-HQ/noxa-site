import Link from 'next/link';
import { NoxaLogo } from './NoxaMark';
import { links } from '@/content/site';

const NAV = [
  { label: 'Our products', href: '/products' },
  { label: 'Safety', href: '/#trust' },
  { label: 'Newsroom', href: '/newsroom' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/about#careers' },
];

export function Header() {
  return (
    <header className="site-header sticky top-0 z-30 border-b border-transparent bg-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Noxa home">
          <NoxaLogo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium lg:flex">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-ink transition hover:text-indigo">
              {n.label}
            </Link>
          ))}
          <a
            href={`mailto:${links.email}`}
            className="inline-flex min-h-11 items-center rounded-full bg-indigo px-5 font-semibold text-white transition hover:bg-indigo-deep"
          >
            Contact us
          </a>
        </nav>

        {/* Phone and tablet: a menu that opens without JavaScript. */}
        <details className="group lg:hidden">
          <summary
            aria-label="Menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line-strong"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="group-open:hidden">
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="hidden group-open:block">
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </summary>
          <nav
            aria-label="Main"
            className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-line bg-white px-5 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgba(14,21,48,0.25)]"
          >
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="rounded-xl px-3 py-3 text-[17px] font-semibold hover:bg-soft">
                {n.label}
              </Link>
            ))}
            <a
              href={`mailto:${links.email}`}
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-indigo font-semibold text-white"
            >
              Contact us
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
