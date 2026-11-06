import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, FounderAvatar, StoryCard } from '@/components/ui';
import { formatDate, stories, type Block } from '@/content/news';

type Params = { params: Promise<{ slug: string }> };

/** Only stories with their own body get a page here; the rest link out. */
const own = stories.filter((s) => s.body);

export function generateStaticParams() {
  return own.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const story = own.find((s) => s.slug === slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: { title: story.title, description: story.excerpt, images: [story.image.src], type: 'article' },
  };
}

function render(block: Block, i: number) {
  if (block.type === 'h2') return <h2 key={i} className="pt-4 text-[28px] leading-[1.2] font-extrabold tracking-[-0.02em] text-ink">{block.text}</h2>;
  if (block.type === 'list')
    return (
      <ul key={i} className="flex list-disc flex-col gap-2.5 pl-6">
        {block.items.map((it) => <li key={it}>{it}</li>)}
      </ul>
    );
  return <p key={i}>{block.text}</p>;
}

export default async function StoryPage({ params }: Params) {
  const { slug } = await params;
  const story = own.find((s) => s.slug === slug);
  if (!story) notFound();
  const more = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <article className="pb-24 sm:pb-28">
      <div className="rise mx-auto flex max-w-[760px] flex-col gap-6 px-5 pt-14 pb-10 sm:px-8 sm:pt-16">
        <Link href="/newsroom" className="self-start text-sm font-semibold text-indigo hover:text-indigo-deep">← Newsroom</Link>
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-muted">
          <span className="rounded-full bg-indigo-tint px-3 py-1.5 text-indigo">{story.category}</span>
          <time dateTime={story.date}>{formatDate(story.date)}</time>
          {story.readMinutes && <><span aria-hidden="true">·</span><span>{story.readMinutes} min read</span></>}
        </div>
        <h1 className="text-[clamp(36px,5.4vw,60px)] leading-[1.05] font-extrabold tracking-[-0.045em]">{story.title}</h1>
        <p className="text-[20px] leading-[1.55] text-muted">{story.excerpt}</p>
        {story.author && (
          <div className="flex items-center gap-3.5 pt-1">
            <FounderAvatar size={44} />
            <div className="flex flex-col">
              <strong className="text-[15px]">{story.author}</strong>
              <span className="text-sm text-muted">Founder &amp; CEO</span>
            </div>
          </div>
        )}
      </div>

      <figure className="rise rise-2 mx-auto max-w-[1080px] px-5 sm:px-8">
        <div className={`overflow-hidden rounded-[24px] ${story.image.dark ? 'bg-[#0E1630]' : 'bg-soft'}`}>
          <Image src={story.image.src} alt={story.image.alt} width={1600} height={1000} sizes="(max-width: 1100px) 100vw, 1020px" className="block h-auto w-full" />
        </div>
      </figure>

      <div className="mx-auto flex max-w-[760px] flex-col gap-5 px-5 pt-12 text-[18px] leading-[1.7] text-[#1F2740] sm:px-8 sm:text-[19px]">
        {story.body!.map(render)}
      </div>

      <Container className="flex flex-col gap-8 pt-24">
        <h2 className="text-[32px] font-extrabold tracking-[-0.03em]">More stories</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {more.map((s, i) => <div key={s.slug} data-reveal={i}><StoryCard story={s} /></div>)}
        </div>
      </Container>
    </article>
  );
}
