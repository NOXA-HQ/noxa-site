import Link from 'next/link';
import { NoxaLogo } from './NoxaMark';
import { company, links } from '@/content/site';
import { products } from '@/content/products';
import { ProductIcon } from './ui';

export function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div data-reveal className="mx-auto flex max-w-[1280px] flex-col gap-10 px-5 pb-9 pt-16 sm:px-8">
        <div className="grid grid-cols-2 gap-8 text-[15px] sm:grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
          <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
            <NoxaLogo />
            <span className="text-muted">{company.motto}</span>
          </div>
          <div className="flex flex-col gap-2.5">
            <strong className="font-bold">Products</strong>
            {products.map((p) => (
              <Link key={p.id} href={`/products#${p.id}`} className="flex items-center gap-2 text-muted hover:text-ink">
                <ProductIcon product={p} size={20} className="ring-1 ring-line" />
                {p.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            <strong className="font-bold">Company</strong>
            <Link href="/about" className="text-muted hover:text-ink">About</Link>
            <Link href="/about#letter" className="text-muted hover:text-ink">Founder&rsquo;s letter</Link>
            <Link href="/newsroom" className="text-muted hover:text-ink">Newsroom</Link>
            <Link href="/about#careers" className="text-muted hover:text-ink">Careers</Link>
            <Link href="/#trust" className="text-muted hover:text-ink">Safety</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <strong className="font-bold">Follow</strong>
            <a href={links.linkedin} className="text-muted hover:text-ink">LinkedIn</a>
            <a href={links.github} className="text-muted hover:text-ink">GitHub</a>
            <a href={`mailto:${links.email}`} className="text-muted hover:text-ink">Email</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line-strong pt-6 text-sm text-muted">
          <span>© {new Date().getFullYear()} {company.legalName}</span>
          <span>{company.location}</span>
        </div>
      </div>
    </footer>
  );
}
