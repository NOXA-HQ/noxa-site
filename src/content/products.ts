import { links } from './site';

/** The Noxa family. Add a product here and it shows on the homepage and in the footer. */
export type Product = {
  id: 'dashfixe' | 'noxa-save' | 'aptrune';
  name: string;
  /** The letter on the app icon, used until the product has a logo. */
  initial: string;
  /** The product's own logo files in public/images (mark = the square icon, wordmark = the name). */
  logo?: { mark: string; wordmark?: string };
  status: string;
  /** One line on the homepage card. */
  short: string;
  /** The line on the little drawn app screen at the bottom of the card. */
  screenLine: string;
  tagline: string;
  points: string[];
  /** Brand colours: background, darker shade (chips), light text on the background, pale tint. */
  color: { bg: string; deep: string; soft: string; tint: string };
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  live: boolean;
};

export const products: Product[] = [
  {
    id: 'dashfixe',
    name: 'Dashfixe',
    initial: 'D',
    logo: { mark: '/images/dashfixe-mark.png', wordmark: '/images/dashfixe-wordmark.png' },
    status: 'Portugal · Pre-launch',
    short: 'Somebody good, close by. Agree the price before anyone travels.',
    screenLine: 'Free near you right now',
    tagline: "Somebody good, close by. See who's free near you, agree the price in chat before anyone travels, and pay in the app.",
    points: [
      'Upfront estimates: materials and labour itemised',
      'Vetted artisans; electricians DGEG certified only',
      'Plumbing, electrical, painting, carpentry, cleaning',
    ],
    color: { bg: '#2563EB', deep: '#1D4ED8', soft: '#E4ECFF', tint: '#DCE6FB' },
    primary: { label: 'Visit dashfixe.com', href: links.dashfixe },
    secondary: { label: "I'm an artisan", href: links.dashfixePro },
    live: true,
  },
  {
    id: 'noxa-save',
    name: 'Noxa Save',
    initial: 'S',
    status: 'Nigeria · Coming soon',
    short: 'The ajo you trust, made safe — on any phone, even with airtime.',
    screenLine: 'Your turn is coming up',
    tagline: 'The ajo you trust, made safe. Rotating savings groups with digital contributions, automatic payouts and records every member can see.',
    points: [
      'Every member NIN-verified before money moves',
      'Fund with card, bank, USSD — or airtime',
      'Works on a smartphone or a basic phone',
    ],
    color: { bg: '#0F7A5C', deep: '#0B5E47', soft: '#DDF5EC', tint: '#D3EEE4' },
    primary: { label: 'Get notified', href: `mailto:${links.email}?subject=${encodeURIComponent('Noxa Save waitlist')}` },
    live: false,
  },
  {
    id: 'aptrune',
    name: 'Aptrune',
    initial: 'A',
    status: 'Coming soon',
    short: 'See how well you match a job before you apply — and what to sharpen first.',
    screenLine: 'Your match for this role',
    tagline: 'Your job-match profile helper. Build one honest profile, see how well it fits each role, and know what to sharpen before you apply.',
    points: [
      'One profile from your experience and skills',
      'A clear match for each role, with the gaps named',
      'What to sharpen next, before you apply',
    ],
    color: { bg: '#7E22CE', deep: '#6B21A8', soft: '#F1E4FF', tint: '#EDDDFB' },
    primary: { label: 'Get notified', href: `mailto:${links.email}?subject=${encodeURIComponent('Aptrune waitlist')}` },
    live: false,
  },
];
