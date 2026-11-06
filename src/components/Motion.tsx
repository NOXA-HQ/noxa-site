'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Runs the site's two bits of scroll behaviour:
 * - reveals each [data-reveal] element once, as it comes into view;
 * - marks the page as scrolled so the header can turn translucent.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'));
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => (root.dataset.scrolled = window.scrollY > 8 ? '1' : '');
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
