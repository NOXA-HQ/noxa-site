import type { Metadata } from 'next';
import '@fontsource-variable/newsreader';
import Link from 'next/link';
import { Button, Container, Eyebrow, SectionTitle } from '@/components/ui';
import { NoxaMark } from '@/components/NoxaMark';
import { company, founder, founderLetter, links, mailto, values } from '@/content/site';
import { products } from '@/content/products';

export const metadata: Metadata = {
  title: 'About',
  description: 'A letter from our founder, why Noxa exists, what we believe, and how to join us.',
};

const serif = { fontFamily: "'Newsreader Variable', Georgia, serif" };

/** About (design C2): the motto, the founder's letter, then the name story, mission, values and careers. */
export default function About() {
  return (
    <>
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10 px-5 pt-24 pb-20 sm:px-8 sm:pt-32">
        <span className="rise text-[13px] font-bold tracking-[0.1em] text-muted uppercase">About Noxa</span>
        <h1 className="rise rise-1 text-[clamp(56px,9vw,128px)] leading-[0.92] font-extrabold tracking-[-0.055em]">
          Build what&rsquo;s<br />missing.
        </h1>
        <div className="rise rise-2 flex flex-wrap items-center gap-3">
          {products.map((p) => (
            <Link key={p.id} href={`/products#${p.id}`} className="inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold text-white hover:opacity-90" style={{ background: p.color.bg }}>
              {p.name}
            </Link>
          ))}
          <span className="inline-flex min-h-10 items-center rounded-full border-[1.5px] border-dashed border-[#8A93A8] px-4 text-sm font-semibold text-muted">What&rsquo;s next</span>
        </div>
      </div>

      <section id="letter" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto flex max-w-[720px] flex-col gap-7 px-5 py-24 text-[21px] leading-[1.65] text-[#1F2740] sm:px-8 sm:text-[22px]" style={serif}>
          <p data-reveal className="font-sans text-[13px] font-bold tracking-[0.12em] text-muted uppercase">A letter from our founder</p>
          {founderLetter.map((para) => <p key={para} data-reveal>{para}</p>)}
          <div data-reveal className="flex flex-col gap-1.5 pt-4">
            <span className="text-[34px] text-ink italic">{founder.name.split(' ')[0]}</span>
            <span className="font-sans text-[15px] font-semibold text-ink">{founder.name}</span>
            <span className="font-sans text-sm text-muted">{founder.role} · {company.location}</span>
            <span className="flex flex-wrap gap-5 pt-3 font-sans text-[15px] font-semibold">
              <a href={links.github} className="text-indigo hover:text-indigo-deep">GitHub ↗</a>
              <a href={links.portfolio} className="text-indigo hover:text-indigo-deep">Portfolio ↗</a>
              <a href={links.linkedin} className="text-indigo hover:text-indigo-deep">LinkedIn ↗</a>
            </span>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-soft">
        <Container className="flex flex-wrap items-center gap-14 py-20">
          <div data-reveal className="flex min-w-0 flex-[1_1_520px] flex-col gap-5">
            <Eyebrow>The name</Eyebrow>
            <h2 className="text-[clamp(34px,4.4vw,56px)] leading-[1.03] font-extrabold tracking-[-0.045em]">Named for the night. Built to be navigated by.</h2>
            <p className="max-w-[600px] text-lg leading-[1.6] text-muted">
              Noxa comes from <em>nox</em>, Latin for night — the sky where stars like Alioth, in the Big Dipper, become visible.
              Our logo is an N drawn from linked stars. Each product we build is one of them: on its own it solves one problem;
              together they form a constellation people can navigate by.
            </p>
          </div>
          <div data-reveal="1" className="flex min-w-0 flex-[1_1_280px] justify-center">
            <div className="flex aspect-square w-full max-w-[320px] items-center justify-center rounded-[32px] bg-ink">
              <NoxaMark size={150} ink="#FFFFFF" />
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 pt-24 md:grid-cols-2">
        <div data-reveal className="flex flex-col gap-4">
          <Eyebrow>Mission</Eyebrow>
          <p className="text-[clamp(22px,2.4vw,30px)] leading-[1.3] font-semibold tracking-[-0.01em]">{company.mission}</p>
        </div>
        <div data-reveal="1" className="flex flex-col gap-4">
          <Eyebrow>Vision</Eyebrow>
          <p className="text-[clamp(22px,2.4vw,30px)] leading-[1.3] font-semibold tracking-[-0.01em]">{company.vision}</p>
        </div>
      </Container>

      <Container className="flex flex-wrap items-start gap-12 pt-24">
        <div data-reveal className="flex min-w-0 flex-[1_1_320px] flex-col gap-4">
          <Eyebrow>What we believe</Eyebrow>
          <SectionTitle>Five rules we build by.</SectionTitle>
        </div>
        <ul className="min-w-0 flex-[2_1_560px]">
          {values.map((v, i) => (
            <li key={v.title} data-reveal={Math.min(i, 3)} className={`flex flex-wrap gap-x-8 gap-y-2 border-t border-line py-6 ${i === values.length - 1 ? 'border-b' : ''}`}>
              <strong className="flex-[0_0_240px] text-xl font-extrabold">{v.title}</strong>
              <span className="flex-[1_1_280px] text-base leading-[1.6] text-muted">{v.body}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Container id="careers" reveal className="pt-24 pb-24 sm:pb-28">
        <div className="flex flex-col gap-10 rounded-[32px] bg-indigo p-8 text-white sm:p-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex max-w-[640px] flex-col gap-4">
              <span className="text-[13px] font-bold tracking-[0.1em] text-[#D9DBFA] uppercase">Careers</span>
              <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-0.03em]">No open roles yet. Early stars welcome.</h2>
              <p className="text-[17px] leading-[1.6] text-[#E4E5FB]">Remote-friendly, anchored in Lisbon. If you want to own real problems end to end, say hello.</p>
            </div>
            <Button href={mailto('Hello from a future teammate', links.careersEmail)} variant="white">{links.careersEmail}</Button>
          </div>
          <div className="grid gap-6 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Owners, not ticket-takers', 'Every person owns a problem end to end.'],
              ['Write it down', 'Decisions and lessons live in shared docs.'],
              ['Learn on real work', 'New skills come from building real products.'],
              ['First roles planned', 'Operations, then full-stack or mobile engineering.'],
            ].map(([t, b]) => (
              <div key={t} className="flex flex-col gap-2">
                <strong className="text-lg font-bold">{t}</strong>
                <span className="text-sm leading-[1.55] text-[#E4E5FB]">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
