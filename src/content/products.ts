import { links } from './site';

/** The Noxa family. Add a product here and it shows on the homepage and in the footer. */
export type Product = {
  id: 'dashfixe' | 'noxa-save';
  name: string;
  /** The letter on the app icon. */
  initial: string;
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
];
