'use client';

import { useState, type ReactNode } from 'react';

/**
 * The filter chips on C3's story grid. The tiles are rendered on the server and passed in
 * with their category; this only decides which ones show.
 */
export function StoryFilter({ filters, tiles }: { filters: string[]; tiles: { key: string; category: string; node: ReactNode }[] }) {
  const [active, setActive] = useState('All');
  const [touched, setTouched] = useState(false);
  return (
    <div className="flex flex-col gap-8">
      <div role="group" aria-label="Filter stories" className="flex flex-wrap gap-2">
        {['All', ...filters].map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => {
              setActive(f);
              setTouched(true);
            }}
            className={`min-h-10 rounded-full px-4 text-sm font-semibold transition ${active === f ? 'bg-ink text-white' : 'border border-line-strong bg-white text-ink hover:border-ink'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tiles.filter((t) => active === 'All' || t.category === active).map((t) => (
          <div key={`${active}-${t.key}`} className={`${touched ? 'rise' : ''} ${t.key.startsWith('wide:') ? 'md:col-span-2' : ''}`}>{t.node}</div>
        ))}
      </div>
    </div>
  );
}
