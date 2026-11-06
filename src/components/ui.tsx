import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { founder } from '@/content/site';
import { formatDate, storyHref, type Story } from '@/content/news';
import type { Product } from '@/content/products';

export function Container({ children, className = '', id, reveal }: { children: ReactNode; className?: string; id?: string; reveal?: boolean }) {
  return (
    <div id={id} data-reveal={reveal ? '' : undefined} className={`mx-auto max-w-[1280px] scroll-mt-24 px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="text-[13px] font-bold tracking-[0.1em] text-muted uppercase">{children}</span>;
}

export function SectionTitle({ children, className = '', ...rest }: { children: ReactNode; className?: string; 'data-reveal'?: boolean | string }) {
  return (
    <h2 {...rest} className={`text-[clamp(34px,4.8vw,64px)] leading-[1.03] font-extrabold tracking-[-0.045em] ${className}`}>
      {children}
    </h2>
  );
}

type ButtonProps = { href: string; children: ReactNode; variant?: 'dark' | 'indigo' | 'outline' | 'white'; className?: string };

const VARIANT = {
  dark: 'bg-ink text-white hover:bg-[#1c2550]',
  indigo: 'bg-indigo text-white hover:bg-indigo-deep',
  outline: 'border-[1.5px] border-line-strong text-ink hover:border-ink',
  white: 'bg-white text-indigo hover:bg-soft',
};

/** A link styled as a button. External and mailto links use <a>; site links use Next's <Link>. */
export function Button({ href, children, variant = 'dark', className = '' }: ButtonProps) {
  const cls = `inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 font-bold transition ${VARIANT[variant]} ${className}`;
  if (href.startsWith('/')) return <Link href={href} className={cls}>{children}</Link>;
  return <a href={href} className={cls}>{children}</a>;
}

/**
 * A product's app icon: its real logo on a white tile when it has one,
 * otherwise its initial on its brand colour. Decorative: the name always sits beside it
 * (or the wrapper carries it), so screen readers don't hear it twice.
 */
export function ProductIcon({ product, size = 40, className = '' }: { product: Product; size?: number; className?: string }) {
  const radius = Math.round(size * 0.28);
  if (product.logo)
    return (
      <span aria-hidden="true" className={`inline-flex flex-none items-center justify-center bg-white ${className}`} style={{ width: size, height: size, borderRadius: radius }}>
        <Image src={product.logo.mark} alt="" width={Math.round(size * 0.78)} height={Math.round(size * 0.78)} />
      </span>
    );
  return (
    <span
      aria-hidden="true"
      className={`inline-flex flex-none items-center justify-center font-extrabold text-white ${className}`}
      style={{ width: size, height: size, borderRadius: radius, background: product.color.bg, fontSize: Math.round(size * 0.42) }}
    >
      {product.initial}
    </span>
  );
}

export function Check({ bg }: { bg: string }) {
  return (
    <span aria-hidden="true" className="inline-flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full" style={{ background: bg }}>
      <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 7.5l2.5 2.5L11 4.5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

export function Icon({ name }: { name: 'shield' | 'tag' | 'lock' }) {
  const d = {
    shield: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z M9 12l2 2 4-4',
    tag: 'M4 7h16v10H4z M8 12h8 M12 9v6',
    lock: 'M6 11V8a6 6 0 0112 0v3 M5 11h14v9H5z',
  }[name];
  return (
    <span aria-hidden="true" className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-indigo-tint">
      <svg width="24" height="24" viewBox="0 0 24 24"><path d={d} fill="none" stroke="#3730C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
  );
}

export function FounderAvatar({ size = 112 }: { size?: number }) {
  if (founder.photo) {
    return <Image src={founder.photo} alt={founder.name} width={size} height={size} className="shrink-0 rounded-full object-cover" style={{ width: size, height: size }} />;
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex shrink-0 items-center justify-center rounded-full bg-indigo font-extrabold tracking-[-0.02em] text-white"
      style={{ width: size, height: size, fontSize: size * 0.32 }}
    >
      {founder.initials}
    </span>
  );
}

const CATEGORY_COLOUR: Record<Story['category'], string> = {
  Company: '#3730C4',
  Dashfixe: '#1D4ED8',
  'Dashfixe Pro': '#1D4ED8',
  'Noxa Save': '#0B6E52',
};

export function StoryCard({ story }: { story: Story }) {
  const href = storyHref(story);
  const external = !href.startsWith('/');
  const inner = (
    <>
      <div className={`relative aspect-[16/10] overflow-hidden rounded-[22px] border border-line ${story.image.dark ? 'bg-[#0E1630]' : 'bg-white'}`}>
        <Image
          src={story.image.src}
          alt={story.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition: story.image.position ?? 'center' }}
        />
      </div>
      <span className="text-[13px] font-bold" style={{ color: CATEGORY_COLOUR[story.category] }}>
        {story.category} · {formatDate(story.date)}
      </span>
      <strong className="text-[21px] leading-[1.28] font-extrabold tracking-[-0.01em] group-hover:text-indigo">
        {story.title}
        {external && <span aria-label="(opens dashfixe.com)"> ↗</span>}
      </strong>
      <span className="text-[15px] leading-[1.55] text-muted">{story.excerpt}</span>
    </>
  );
  const cls = 'group flex flex-col gap-3.5 text-ink';
  return external ? <a href={href} className={cls}>{inner}</a> : <Link href={href} className={cls}>{inner}</Link>;
}
