import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container, StoryCard } from '@/components/ui';
import { StoryFilter } from '@/components/StoryFilter';
import { founder, mailto } from '@/content/site';
import { products } from '@/content/products';
import { stories, storyHref } from '@/content/news';

export const metadata: Metadata = {
  title: 'Newsroom',
  description: 'Product launches, lessons and building in public from Noxa.',
};

/** Newsroom (design C3): a featured story, the family strip, a filterable story grid. */
export default function Newsroom() {
  const [featured, ...rest] = stories;
  const save = products.find((p) => p.id === 'noxa-save')!;
  const featuredHref = storyHref(featured);

  const tiles = [
    {
      key: 'wide:save',
      category: 'Products',
      node: (
        <a href={save.primary.href} className="lift flex min-h-[320px] flex-col justify-end gap-3 rounded-[24px] p-9 text-white" style={{ background: save.color.bg }}>
          <span className="self-start rounded-md bg-white px-2.5 py-1 text-xs font-bold tracking-[0.08em]" style={{ color: save.color.deep }}>COMING SOON</span>
          <strong className="text-[30px] leading-[1.15] font-extrabold tracking-[-0.02em]">Noxa Save: the ajo you trust, on any phone</strong>
          <span className="text-base" style={{ color: save.color.soft }}>Verified members, airtime funding, records everyone can see.</span>
        </a>
      ),
    },
    ...rest.map((s) => ({ key: s.slug, category: s.category.startsWith('Dashfixe') ? 'Products' : 'Building in public', node: <StoryCard story={s} /> })),
    {
      key: 'wide:letter',
      category: 'Building in public',
      node: (
        <Link href="/about#letter" className="lift flex min-h-[260px] flex-col justify-between gap-5 rounded-[24px] bg-indigo p-9 text-white hover:bg-indigo-deep">
          <span className="text-xs font-bold tracking-[0.08em] text-[#D9DBFA]">OUR STORY</span>
          <div className="flex flex-col gap-2.5">
            <strong className="text-[30px] leading-[1.15] font-extrabold tracking-[-0.02em]">A letter from our founder: why Noxa exists</strong>
            <span className="text-base text-[#E4E5FB]">{founder.name}, {founder.role}</span>
          </div>
        </Link>
      ),
    },
  ];

  return (
    <>
      <Container className="flex flex-wrap items-stretch gap-8 pt-14 sm:pt-16">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col justify-center gap-6 py-6">
          <span className="rise text-[13px] font-bold tracking-[0.1em] text-muted uppercase">Newsroom</span>
          <h1 className="rise rise-1 text-[clamp(40px,5.4vw,72px)] leading-[1.03] font-extrabold tracking-[-0.045em]">
            Building in public.
          </h1>
          <p className="rise rise-2 max-w-[520px] text-[19px] leading-[1.55] text-muted">
            Noxa builds trusted products one community at a time — and shares everything we learn along the way.
          </p>
        </div>
        <Link href={featuredHref} className="rise rise-3 lift group flex min-w-0 flex-[1_1_500px] flex-col overflow-hidden rounded-[28px] bg-soft text-ink">
          <div className="relative min-h-[300px] flex-1 bg-[#0E1630]">
            <Image src={featured.image.src} alt={featured.image.alt} fill priority sizes="(max-width: 1024px) 100vw, 620px" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
          </div>
          <div className="flex flex-col gap-2.5 p-7">
            <span className="self-start rounded-md bg-indigo-tint px-2.5 py-1 text-xs font-bold tracking-[0.08em] text-indigo uppercase">{featured.category}</span>
            <strong className="text-[26px] leading-[1.2] font-extrabold tracking-[-0.02em] group-hover:text-indigo">{featured.title}</strong>
            <span className="text-base text-muted">{featured.excerpt}</span>
          </div>
        </Link>
      </Container>

      <Container className="pt-14">
        <div data-reveal className="flex flex-wrap items-center gap-x-10 gap-y-5 rounded-[24px] border border-line px-7 py-6">
          <span className="text-[13px] font-bold tracking-[0.08em] text-muted">THE NOXA FAMILY</span>
          {products.map((p) => (
            <Link key={p.id} href={`/products#${p.id}`} className="flex items-center gap-3 text-lg font-bold text-ink hover:text-indigo">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl font-extrabold text-white" style={{ background: p.color.bg }}>{p.initial}</span>
              {p.name}
              {!p.live && <span className="text-[13px] font-semibold text-muted">Coming soon</span>}
            </Link>
          ))}
          <Link href="/products" className="ml-auto font-semibold text-indigo hover:text-indigo-deep">All products <span aria-hidden="true" className="arrow">→</span></Link>
        </div>
      </Container>

      <Container reveal className="flex flex-col gap-8 pt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[44px] font-extrabold tracking-[-0.03em]">News &amp; stories</h2>
        </div>
        <StoryFilter filters={['Products', 'Building in public']} tiles={tiles} />
      </Container>

      <Container reveal className="pt-24 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-soft p-9 sm:p-10">
          <div className="flex flex-[1_1_400px] flex-col gap-2">
            <strong className="text-[26px] font-extrabold tracking-[-0.02em]">Get Noxa updates</strong>
            <span className="text-base text-muted">New products, launches and lessons — once a month.</span>
          </div>
          <a href={mailto('Subscribe to Noxa updates')} className="inline-flex min-h-[52px] items-center rounded-full bg-indigo px-6 font-bold text-white hover:bg-indigo-deep">
            Subscribe by email
          </a>
        </div>
      </Container>
    </>
  );
}
