import Link from 'next/link';
import { formatDate } from '@/content/news';
import type { LegalDoc } from '@/content/legal';

/** One legal document (privacy, terms): a plain, readable column with numbered sections. */
export function LegalPage({ doc, other }: { doc: LegalDoc; other: { label: string; href: string } }) {
  return (
    <article className="mx-auto flex max-w-[760px] flex-col gap-12 px-5 pt-20 pb-24 sm:px-8 sm:pt-24 sm:pb-28">
      <header className="rise flex flex-col gap-5">
        <span className="text-[13px] font-bold tracking-[0.1em] text-muted uppercase">Legal</span>
        <h1 className="text-[clamp(40px,6vw,64px)] leading-[1.02] font-extrabold tracking-[-0.045em]">{doc.title}</h1>
        <p className="text-[20px] leading-[1.55] text-muted">{doc.lead}</p>
        <p className="text-sm font-semibold text-muted">
          Last updated <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
        </p>
      </header>

      <ol className="flex flex-col gap-10">
        {doc.sections.map((s, i) => (
          <li key={s.title} id={slug(s.title)} className="scroll-mt-24 flex flex-col gap-4 border-t border-line pt-8">
            <h2 className="text-[24px] leading-[1.25] font-extrabold tracking-[-0.02em]">
              <span className="mr-3 text-muted">{String(i + 1).padStart(2, '0')}</span>
              {s.title}
            </h2>
            {s.body.map((b, j) =>
              Array.isArray(b) ? (
                <ul key={j} className="flex list-disc flex-col gap-2.5 pl-6 text-[17px] leading-[1.7] text-[#1F2740]">
                  {b.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : (
                <p key={j} className="text-[17px] leading-[1.7] text-[#1F2740]">{b}</p>
              ),
            )}
          </li>
        ))}
      </ol>

      <p className="border-t border-line pt-8 text-[15px] text-muted">
        See also our{' '}
        <Link href={other.href} className="font-semibold text-indigo hover:text-indigo-deep">{other.label}</Link>.
      </p>
    </article>
  );
}

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
