import type { Metadata } from 'next';
import Image from 'next/image';
import { Container, ProductIcon } from '@/components/ui';
import { mailto } from '@/content/site';
import { products, type Product } from '@/content/products';

/** What each product's world shows in its three tiles. */
const WORLD_TILES: Record<Product['id'], [string, string][]> = {
  dashfixe: [
    ['Fix now', 'Matched with someone free right now'],
    ['Upfront estimate', 'Approve the total first'],
    ['Vetted artisans', 'Certified where it matters'],
  ],
  'noxa-save': [
    ['Verified members', 'NIN-checked before money moves'],
    ['Any phone', 'App, USSD or SMS'],
    ['Airtime funding', 'No bank account needed'],
  ],
  aptrune: [
    ['One profile', 'Your experience and skills in one place'],
    ['Match per role', 'See how well you fit, and why'],
    ['Know the gaps', 'What to sharpen before you apply'],
  ],
};

const PROMISE: [string, string][] = [
  ['Verified people', 'Everyone is checked before trust is needed.'],
  ['Fair, upfront', 'Prices and terms agreed before anything happens.'],
  ['Honest records', 'Every job and payment visible to the people involved.'],
];

export const metadata: Metadata = {
  title: 'Our products',
  description: 'Dashfixe, Noxa Save, Aptrune and what comes next: the Noxa family of products.',
};

/** Products (design C4): each product gets a full-colour world of its own, then the promise they share. */
export default function Products() {
  return (
    <>
      <Container className="flex flex-col items-center gap-6 pt-24 pb-24 text-center">
        <span className="rise text-sm font-bold tracking-[0.1em] text-muted">OUR PRODUCTS</span>
        <h1 className="rise rise-1 max-w-[960px] text-[clamp(46px,7vw,96px)] leading-[0.98] font-extrabold tracking-[-0.05em]">Different worlds. One promise.</h1>
        <p className="rise rise-2 max-w-[620px] text-[20px] leading-[1.55] text-muted">
          Each Noxa product is built for one community&rsquo;s everyday problem — and every one is verified, fair and honest.
        </p>
        <div className="rise rise-3 flex gap-2.5 pt-2" aria-hidden="true">
          {products.map((p) => <span key={p.id} className="h-2 w-14 rounded-full" style={{ background: p.color.bg }} />)}
          <span className="h-2 w-14 rounded-full bg-line-strong" />
        </div>
      </Container>

      <div id="products" className="scroll-mt-24">
        {products.map((p, i) => (
          <section key={p.id} id={p.id} className="scroll-mt-24 text-white" style={{ background: p.color.bg }}>
            <Container className={`flex items-center gap-16 py-24 sm:py-28 ${i % 2 ? 'flex-wrap-reverse' : 'flex-wrap'}`}>
              {i % 2 === 1 && <Phone product={p} />}
              <div data-reveal className="flex min-w-0 flex-[1_1_480px] flex-col gap-6">
                <span className="self-start rounded-full bg-white px-3 py-1.5 text-[13px] font-bold" style={{ color: p.color.deep }}>
                  World {String(i + 1).padStart(2, '0')} · {p.status}
                </span>
                <div className="flex items-center gap-5">
                  <ProductIcon product={p} size={72} className="shadow-[0_8px_24px_rgba(0,0,0,0.2)]" />
                  <h2 className="text-[clamp(48px,6vw,80px)] leading-[0.98] font-extrabold tracking-[-0.045em]">{p.name}</h2>
                </div>
                <p className="text-[21px] leading-[1.5]" style={{ color: p.color.soft }}>{p.tagline}</p>
                <ul className="grid gap-4 sm:grid-cols-3">
                  {WORLD_TILES[p.id].map(([t, b], j) => (
                    <li key={t} data-reveal={j + 1} className="rounded-[18px] p-4.5 text-[15px] leading-[1.45]" style={{ background: p.color.deep }}>
                      <strong className="mb-1 block text-[17px]">{t}</strong>{b}
                    </li>
                  ))}
                </ul>
                <a href={p.primary.href} className="inline-flex min-h-[52px] items-center self-start rounded-full bg-white px-6 font-bold hover:bg-soft" style={{ color: p.color.deep }}>
                  {p.live ? `Enter ${p.name} ↗` : 'Join the waitlist'}
                </a>
              </div>
              {i % 2 === 0 && <Phone product={p} />}
            </Container>
          </section>
        ))}
      </div>

      <section className="bg-soft">
        <Container reveal className="flex flex-wrap items-center justify-between gap-8 py-24">
          <div className="flex flex-[1_1_520px] flex-col gap-4">
            <span className="self-start rounded-full border-[1.5px] border-dashed border-[#8A93A8] px-3 py-1.5 text-[13px] font-bold text-muted">
              World {String(products.length + 1).padStart(2, '0')} · In the lab
            </span>
            <h2 className="text-[clamp(34px,4.6vw,56px)] leading-[1.03] font-extrabold tracking-[-0.04em]">The next world starts with a real problem.</h2>
            <p className="max-w-[560px] text-lg leading-[1.55] text-muted">Missing locally, worth paying to fix, and possible to launch small. Know one?</p>
          </div>
          <a href={mailto('A problem worth solving')} className="inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-ink px-6 font-bold text-ink hover:bg-white">Suggest a problem</a>
        </Container>
      </section>

      <Container id="trust" className="grid gap-10 py-28 md:grid-cols-4">
        <div data-reveal className="flex flex-col gap-3.5">
          <span className="text-[13px] font-bold tracking-[0.1em] text-muted">THE PROMISE</span>
          <h2 className="text-[40px] leading-[1.05] font-extrabold tracking-[-0.03em]">What every world shares</h2>
        </div>
        {PROMISE.map(([t, b], i) => (
          <div key={t} data-reveal={i + 1} className="flex flex-col gap-2.5 border-t-[3px] border-indigo pt-5">
            <strong className="text-xl font-extrabold">{t}</strong>
            <span className="text-base leading-[1.6] text-muted">{b}</span>
          </div>
        ))}
      </Container>
    </>
  );
}

function Phone({ product }: { product: Product }) {
  const frame = 'w-[290px] h-[580px] rounded-[46px] border-[10px] overflow-hidden';
  return (
    <div data-reveal="1" className="flex min-w-0 flex-[1_1_360px] justify-center">
      {product.id === 'dashfixe' ? (
        <div className={`${frame} relative border-[#0B1B3F] bg-white`}>
          <Image src="/images/dashfixe-mobile.jpg" alt="The Dashfixe app home: Somebody good, close by" fill sizes="290px" className="object-cover object-top" />
        </div>
      ) : product.id === 'aptrune' ? (
        <div className={`${frame} flex flex-col gap-3.5 border-[#3B0D63] bg-[#FAF6FE] px-5 py-8 text-ink`}>
          <span className="text-lg font-extrabold" style={{ color: product.color.bg }}>Aptrune</span>
          <span className="text-lg font-bold">Junior frontend developer</span>
          <div className="flex items-center gap-4 rounded-2xl bg-white p-4">
            <span className="relative inline-flex h-16 w-16 flex-none items-center justify-center rounded-full text-lg font-extrabold" style={{ background: `conic-gradient(${product.color.bg} 0 78%, #EAE3F2 78% 100%)`, color: product.color.deep }}>
              <span className="absolute inset-[6px] rounded-full bg-white" />
              <span className="relative">78%</span>
            </span>
            <span className="text-sm leading-[1.4] font-semibold text-muted">Strong match. Two gaps to close.</span>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl bg-white p-4 text-[13px] font-semibold">
            {[['React, TypeScript', true], ['Team projects', true], ['Testing', false], ['Portuguese (B1)', false]].map(([skill, ok]) => (
              <span key={String(skill)} className="flex items-center justify-between">
                {skill}
                <span className={ok ? '' : 'text-muted'} style={ok ? { color: product.color.bg } : undefined}>{ok ? '✓ Match' : 'To sharpen'}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2.5">
            <span className="flex h-12 items-center justify-center rounded-[14px] text-[15px] font-bold text-white" style={{ background: product.color.bg }}>See what to sharpen</span>
            <span className="text-center text-[11px] font-semibold text-muted">Design preview</span>
          </div>
        </div>
      ) : (
        <div className={`${frame} flex flex-col gap-3.5 border-[#08372B] bg-[#F5FBF8] px-5 py-8 text-ink`}>
          <span className="text-lg font-extrabold" style={{ color: product.color.bg }}>Noxa Save</span>
          <span className="text-lg font-bold">Your group</span>
          <div className="flex flex-col gap-2.5 rounded-2xl bg-white p-4">
            <span className="text-xs font-semibold text-muted">This round</span>
            <div className="flex -space-x-2">
              {['AO', 'KM', 'TA', 'BF', 'OE'].map((m, i) => (
                <span key={m} className={`inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold ${i < 3 ? 'text-white' : 'bg-line text-muted'}`} style={i < 3 ? { background: product.color.bg } : undefined}>{m}</span>
              ))}
            </div>
            <div className="h-1.5 rounded-full bg-line"><div className="h-1.5 w-3/5 rounded-full" style={{ background: product.color.bg }} /></div>
            <span className="text-xs font-semibold text-muted">3 of 5 paid</span>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2.5">
            <span className="rounded-xl px-3 py-2 text-xs font-semibold" style={{ background: product.color.tint, color: product.color.deep }}>Every member is NIN-verified</span>
            <span className="flex h-12 items-center justify-center rounded-[14px] text-[15px] font-bold text-white" style={{ background: product.color.bg }}>Pay contribution</span>
            <span className="text-center text-[11px] font-semibold text-muted">Design preview</span>
          </div>
        </div>
      )}
    </div>
  );
}
