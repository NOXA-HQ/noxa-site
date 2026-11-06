/**
 * Newsroom stories. Newest first.
 * - A story with `body` gets its own page at /newsroom/<slug>.
 * - A story with `href` instead links straight out (e.g. to a Dashfixe guide).
 */

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'list'; items: string[] };

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO, YYYY-MM-DD
  category: 'Company' | 'Dashfixe' | 'Dashfixe Pro' | 'Noxa Save';
  image: { src: string; alt: string; position?: string; dark?: boolean };
  author?: string;
  readMinutes?: number;
  href?: string;
  body?: Block[];
};

export const stories: Story[] = [
  {
    slug: 'noxa-is-born',
    title: 'Noxa is born: Dashfixe is now "a Noxa product"',
    excerpt: "Why we're building a family of products, and what the new signature promises.",
    date: '2026-11-05',
    category: 'Company',
    image: {
      src: '/images/noxa-is-born.jpg',
      alt: 'Dashfixe, from Noxa',
      dark: true,
    },
    author: 'Abiola Daniel Ogunsola',
    readMinutes: 3,
    body: [
      {
        type: 'p',
        text: "Noxa is the company behind Dashfixe. Our job is simple to say and hard to do: build the everyday software people are missing — the plain, reliable tools that work elsewhere but haven't reached the places we live.",
      },
      { type: 'h2', text: 'One family, one promise' },
      {
        type: 'p',
        text: "Each Noxa product keeps its own name and its own colours. Dashfixe stays blue. What they share is a promise: verified people, prices agreed before anything happens, and records everyone involved can see. \"From Noxa\" is how you'll know.",
      },
      {
        type: 'list',
        items: [
          'On dashfixe.com, the footer now reads "A Noxa product".',
          'In the Dashfixe app, "from Noxa" sits under the welcome screen.',
          'In Dashfixe Pro, the artisan app, it is on the sign-in screen.',
        ],
      },
      { type: 'h2', text: 'What comes next' },
      {
        type: 'p',
        text: "Dashfixe's pilot opens in Seixal and Amora, and we're recruiting artisans now. Noxa Save — digital ajo and esusu savings for Nigeria, on any phone — is next in the family once it's funded.",
      },
      { type: 'p', text: "We launch small, prove it works, and only then grow. We'll share every step here." },
    ],
  },
  {
    slug: 'burst-pipe-guide',
    title: 'A burst pipe or a big leak: the first 10 minutes',
    excerpt: 'Free repair guides from Dashfixe, in eight languages.',
    date: '2026-10-20',
    category: 'Dashfixe',
    image: { src: '/images/dashfixe-guide.jpg', alt: 'A Dashfixe repair guide page', position: 'center top' },
    href: 'https://www.dashfixe.com/guides/burst-pipe',
  },
  {
    slug: 'artisans-wanted',
    title: 'Artisans wanted for the Seixal and Amora pilot',
    excerpt: 'Set your own price, get paid in the app, no lead fees.',
    date: '2026-10-15',
    category: 'Dashfixe Pro',
    image: { src: '/images/dashfixe-pro.jpg', alt: 'Dashfixe Pro: Work comes to you. You keep the job.', position: 'left center', dark: true },
    href: 'https://www.dashfixe.com/pro',
  },
];

export const storyHref = (s: Story) => s.href ?? `/newsroom/${s.slug}`;

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
