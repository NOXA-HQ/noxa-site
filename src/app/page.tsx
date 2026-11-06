import Link from 'next/link';
import { Button, Container, FounderAvatar, Icon, ProductIcon, SectionTitle, StoryCard } from '@/components/ui';
import { NoxaMark } from '@/components/NoxaMark';
import { company, founder, heroVideo, links, mailto, promises, steps } from '@/content/site';
import { products } from '@/content/products';
import { stories } from '@/content/news';

/** Home (design C1): mission hero, the family, one signature, safety, how we build, newsroom, people. */
export default function Home() {
  return (
    <>
      {/* Mission hero */}
      <Container className="flex flex-col items-center gap-7 pt-20 text-center sm:pt-24">
        <Link
          href="/about"
          className="rise inline-flex min-h-10 items-center gap-2 rounded-full bg-indigo-tint px-4.5 text-sm font-semibold text-indigo hover:bg-[#e3e6fa]"
        >
          Our mission <span aria-hidden="true" className="arrow">→</span>
        </Link>
        <h1 className="rise rise-1 max-w-[980px] text-[clamp(42px,6.4vw,84px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          We build the everyday software people are missing.
        </h1>
        <p className="rise rise-2 max-w-[640px] text-[19px] leading-[1.55] text-muted sm:text-[20px]">
          Simple, trustworthy products for real problems — starting in Portugal and Nigeria.
        </p>
      </Container>

      <Container className="rise rise-3 pt-14">
        <HeroMedia />
      </Container>

      {/* The family */}
      <Container id="products" className="flex flex-col gap-12 pt-32 sm:pt-36">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle className="max-w-[720px]">And the products that bring it home.</SectionTitle>
          <Link href="/products" className="font-semibold text-indigo hover:text-indigo-deep">See all products <span aria-hidden="true" className="arrow">→</span></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <article
              key={p.id}
              id={p.id}
              data-reveal={i}
              className="lift group flex min-h-[520px] scroll-mt-24 flex-col gap-5 overflow-hidden rounded-[32px] p-8 text-white sm:p-10"
              style={{ background: p.color.bg }}
            >
              <span className="self-start rounded-full bg-white px-3 py-1.5 text-[13px] font-semibold" style={{ color: p.color.deep }}>
                {p.status}
              </span>
              <div className="flex items-center gap-4">
                <ProductIcon product={p} size={56} className="shadow-[0_6px_20px_rgba(0,0,0,0.18)]" />
                <h3 className="text-[40px] font-extrabold tracking-[-0.03em]">{p.name}</h3>
              </div>
              <p className="max-w-[440px] text-lg leading-[1.5]" style={{ color: p.color.soft }}>{p.short}</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={p.primary.href}
                  className="inline-flex min-h-12 items-center rounded-full bg-white px-5.5 font-semibold hover:bg-soft"
                  style={{ color: p.color.deep }}
                >
                  {p.primary.label}{p.live && <span aria-hidden="true" className="arrow">&nbsp;↗</span>}
                </a>
                <Link href={`/products#${p.id}`} className="font-semibold text-white underline-offset-4 hover:underline">
                  Learn more <span aria-hidden="true" className="arrow">→</span>
                </Link>
              </div>
              <div className="-mb-20 flex flex-1 items-end justify-center pt-6">
                <MiniScreen product={p.id} />
              </div>
            </article>
          ))}
        </div>
        <article data-reveal className="flex flex-wrap items-center justify-between gap-6 rounded-[32px] bg-soft p-8 sm:p-10">
          <div className="flex flex-[1_1_480px] flex-col gap-2.5">
            <h3 className="text-[28px] font-extrabold tracking-[-0.02em]">More from Noxa, in the lab.</h3>
            <p className="text-[17px] leading-[1.55] text-muted">
              A new product joins the family only when the problem is real, missing locally, and worth paying to fix.
            </p>
          </div>
          <Button href={mailto('A problem worth solving')} variant="outline" className="border-ink">Suggest a problem</Button>
        </article>
      </Container>

      {/* One signature */}
      <Container className="flex flex-wrap items-center gap-14 pt-32 sm:pt-36">
        <div data-reveal className="flex min-w-0 flex-[1_1_440px] flex-col gap-5">
          <SectionTitle>Different apps. One signature.</SectionTitle>
          <p className="text-[19px] leading-[1.6] text-muted">
            Every Noxa product has its own name and look. Look for the constellation and the words &ldquo;from Noxa&rdquo; — it
            means verified people, fair prices and records you can trust.
          </p>
        </div>
        <div data-reveal="1" className="flex min-w-0 flex-[1_1_440px] flex-col items-center gap-7 rounded-[32px] bg-ink px-10 py-14">
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((p, i) => (
              <span key={p.id} data-reveal={i + 1} className="inline-flex" role="img" aria-label={p.name}>
                <ProductIcon product={p} size={72} />
              </span>
            ))}
            <span data-reveal="3" className="inline-flex h-[72px] w-[72px] items-center justify-center rounded-[20px] border-[1.5px] border-dashed border-[#5A6688] text-3xl text-[#AEB6C8]" aria-label="More to come">+</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[13px] font-medium tracking-[0.04em] text-[#AEB6C8]">from</span>
            <span className="flex items-center gap-2 text-[22px] font-extrabold tracking-[-0.02em] text-white">
              <NoxaMark size={24} ink="#FFFFFF" />
              Noxa
            </span>
          </div>
        </div>
      </Container>

      {/* Safety */}
      <section id="trust" className="mt-32 scroll-mt-24 bg-soft sm:mt-36">
        <Container className="flex flex-col gap-12 py-24 sm:py-28">
          <SectionTitle data-reveal className="max-w-[760px]">Built on trust, from the first line of code.</SectionTitle>
          <div className="grid gap-6 md:grid-cols-3">
            {promises.map((p, i) => (
              <article key={p.title} data-reveal={i} className="lift flex flex-col gap-4 rounded-[28px] bg-white p-9">
                <Icon name={p.icon} />
                <h3 className="text-[22px] font-bold">{p.title}</h3>
                <p className="text-base leading-[1.6] text-muted">{p.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* How we build */}
      <Container id="build" className="flex flex-col gap-12 pt-32 sm:pt-36">
        <SectionTitle data-reveal className="max-w-[760px]">Small first. Proven. Then everywhere.</SectionTitle>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal={i} className="flex flex-col gap-3.5">
              <span className="text-[44px] font-extrabold tracking-[-0.04em] text-[#C9CEF2]">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-[21px] font-bold">{s.title}</h3>
              <p className="text-base leading-[1.6] text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>

      {/* Newsroom */}
      <Container className="flex flex-col gap-10 pt-32 sm:pt-36">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle>Catch up on the latest.</SectionTitle>
          <Link href="/newsroom" className="font-semibold text-indigo hover:text-indigo-deep">Visit the newsroom <span aria-hidden="true" className="arrow">→</span></Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.slice(0, 3).map((s, i) => <div key={s.slug} data-reveal={i}><StoryCard story={s} /></div>)}
        </div>
      </Container>

      {/* Leadership and careers */}
      <Container id="careers" className="grid gap-6 pt-32 sm:pt-36 lg:grid-cols-2">
        <article data-reveal className="flex flex-wrap items-center gap-7 rounded-[32px] bg-soft p-8 sm:p-10">
          <FounderAvatar size={120} />
          <div className="flex flex-[1_1_200px] flex-col gap-2">
            <span className="text-[13px] font-semibold text-muted">Meet our leadership</span>
            <strong className="text-2xl font-extrabold tracking-[-0.02em]">{founder.name}</strong>
            <span className="text-muted">{founder.role}</span>
            <Link href="/about#letter" className="font-semibold text-indigo hover:text-indigo-deep">Read his letter <span aria-hidden="true" className="arrow">→</span></Link>
          </div>
        </article>
        <article data-reveal="1" className="flex flex-col justify-center gap-3.5 rounded-[32px] bg-indigo p-8 text-white sm:p-10">
          <span className="text-[13px] font-semibold text-[#D9DBFA]">Careers</span>
          <strong className="text-[30px] leading-[1.15] font-extrabold tracking-[-0.02em]">Help build what&rsquo;s missing.</strong>
          <span className="text-base leading-[1.55] text-[#E4E5FB]">No open roles yet — but early teammates are always welcome to say hello.</span>
          <Button href={mailto('Hello from a future teammate', links.careersEmail)} variant="white" className="mt-1 self-start">
            {links.careersEmail}
          </Button>
        </article>
      </Container>

      {/* Contact */}
      <Container id="contact" reveal className="flex flex-col items-center gap-6 pt-32 pb-28 text-center sm:pt-36">
        <h2 className="max-w-[820px] text-[clamp(38px,5.6vw,72px)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          Let&rsquo;s build what&rsquo;s missing, together.
        </h2>
        <p className="text-[19px] text-muted">Partners, investors and communities — we&rsquo;d love to hear from you.</p>
        <Button href={`mailto:${links.email}`} variant="indigo" className="min-h-14 text-[17px]">{links.email}</Button>
      </Container>
    </>
  );
}

/**
 * The big hero panel. Set `heroVideo` in src/content/site.ts to a video file in /public
 * (e.g. '/video/noxa-story.mp4') and it plays here; until then, the constellation shows.
 */
function HeroMedia() {
  if (heroVideo) {
    return (
      <video className="block aspect-[16/8] w-full rounded-[28px] object-cover sm:rounded-[36px]" src={heroVideo} controls playsInline preload="metadata" />
    );
  }
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-[28px] bg-[#DCE3F5] sm:aspect-[16/7] sm:rounded-[36px]" aria-hidden="true">
      <svg viewBox="0 0 800 350" className="h-full w-full">
        <g fill="#0E1530" fillOpacity="0.22">
          {[[60, 50, 2, 0], [180, 290, 2.4, 1.6], [300, 40, 1.6, 3.1], [520, 300, 2, 0.8], [640, 60, 2.2, 2.4], [740, 250, 1.8, 4], [420, 180, 1.4, 1.2], [110, 190, 1.6, 3.6]].map(([cx, cy, r, d]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} className="twinkle" style={{ animationDelay: `${d}s` }} />
          ))}
        </g>
        <path d="M250 270 L250 80 L550 270 L550 80" pathLength={1} className="draw" fill="none" stroke="#0E1530" strokeWidth="3" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M550 80 L640 40" fill="none" stroke="#0E1530" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 8" className="rise" style={{ animationDelay: '2.1s' }} />
        <g className="pop" style={{ animationDelay: '0.3s' }}>
          <circle cx="250" cy="270" r="34" fill="#2563EB" fillOpacity="0.15" className="breathe" />
        </g>
        <circle cx="250" cy="270" r="14" fill="#2563EB" className="pop" style={{ animationDelay: '0.3s' }} />
        <circle cx="250" cy="80" r="9" fill="#0E1530" className="pop" style={{ animationDelay: '0.75s' }} />
        <circle cx="550" cy="270" r="9" fill="#0E1530" className="pop" style={{ animationDelay: '1.3s' }} />
        <g className="pop" style={{ animationDelay: '1.85s' }}>
          <circle cx="550" cy="80" r="34" fill="#0F7A5C" fillOpacity="0.15" className="breathe" style={{ animationDelay: '3.2s' }} />
        </g>
        <circle cx="550" cy="80" r="14" fill="#0F7A5C" className="pop" style={{ animationDelay: '1.85s' }} />
        <circle cx="640" cy="40" r="9" fill="none" stroke="#0E1530" strokeOpacity="0.45" strokeWidth="2" className="pop" style={{ animationDelay: '2.3s' }} />
      </svg>
    </div>
  );
}

/** A small drawn app screen peeking up from the bottom of each product card. */
function MiniScreen({ product }: { product: 'dashfixe' | 'noxa-save' }) {
  const p = products.find((x) => x.id === product)!;
  return (
    <div className="flex h-[220px] w-[220px] flex-col gap-2.5 rounded-t-[32px] bg-white p-5 text-ink transition-[translate] duration-500 ease-out group-hover:-translate-y-2" aria-hidden="true">
      {p.logo?.wordmark ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={p.logo.wordmark} alt="" className="block h-[22px] w-auto self-start" />
      ) : (
        <span className="font-extrabold" style={{ color: p.color.bg }}>{p.name}</span>
      )}
      <span className="text-[13px] font-semibold">{p.screenLine}</span>
      <div className="flex-1 rounded-[14px]" style={{ background: p.color.tint }} />
    </div>
  );
}
