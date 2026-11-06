/**
 * EVERY link, address and fact the site shows lives in this file.
 * Change a value here and every page that uses it updates.
 */

export const links = {
  email: 'hello@noxasoftwares.com',
  careersEmail: 'careers@noxasoftwares.com',
  github: 'https://github.com/OgunsolaAbiolaDaniel',
  portfolio: 'https://ogunsola-abiola-daniel.vercel.app',
  linkedin: 'https://www.linkedin.com/in/abiola-daniel-ogunsola',
  dashfixe: 'https://www.dashfixe.com',
  dashfixePro: 'https://www.dashfixe.com/pro',
  dashfixeGuides: 'https://www.dashfixe.com/guides',
};

/** A mailto: link with a ready-made subject line. */
export const mailto = (subject: string, to = links.email) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}`;

export const company = {
  name: 'Noxa',
  legalName: 'NoxaSoftwares',
  motto: "Build what's missing.",
  description:
    'Noxa is the company behind trusted, simple products for real problems — starting with home repairs in Portugal and community savings in Nigeria.',
  location: 'Lisbon area, Portugal',
  mission:
    'To build reliable, simple software that removes everyday friction for people and small businesses in Europe and Africa.',
  vision:
    'A software engineering company trusted on two continents — for products people use daily, open tools developers rely on, and engineering others hire us for.',
};

export const founder = {
  name: 'Abiola Daniel Ogunsola',
  initials: 'AO',
  role: 'Founder & CEO',
  /** Put a photo in public/images (e.g. founder.jpg) and set its path here; until then, initials show. */
  photo: '' as string,
  bio: 'Abiola builds Noxa from the Lisbon area, for the places he knows best: Portugal and Nigeria.',
};

/** C2's homepage letter, one string per paragraph. Rewrite it in your own words. */
export const founderLetter = [
  "Noxa exists to build the everyday software people are missing. Not the next trend — the plain, reliable tools that work elsewhere but haven't reached the places we live.",
  'Our first product, Dashfixe, helps people in Seixal and Amora find a trusted artisan and agree the price before anyone travels. Our second, Noxa Save, will bring the ajo savings groups millions of Nigerians already trust onto any phone, safely.',
  'Each product keeps its own name. Noxa is the promise behind them: verified people, fair prices, honest records. We launch small, prove it works, and only then grow.',
];

/** The homepage hero video. Put the file in public/video/ and set e.g. '/video/noxa-story.mp4'. Empty = constellation drawing. */
export const heroVideo = '' as string;

/** "How we build" on the homepage. */
export const steps = [
  { title: "Find what's missing", body: 'A problem solved elsewhere but absent where people live.' },
  { title: 'Launch small', body: 'One town, one community, one trade.' },
  { title: 'Prove it works', body: 'Real users, repeat customers, real revenue.' },
  { title: 'Grow the family', body: "Expand what's proven, and start the next product stronger." },
];

export const values = [
  { title: 'Real problems first', body: "Every product starts from a problem we've seen, not a technology we want to try." },
  { title: 'Trust by design', body: 'Verified people, upfront prices and clear records are features, not extras.' },
  { title: 'Ship, then grow', body: 'Launch small in one place. Prove it works. Then expand.' },
  { title: 'Built for everyone', body: 'Works on cheap phones, in more than one language, for people big platforms overlook.' },
  { title: 'Build in public', body: 'We share the journey openly — the wins and the lessons.' },
];

export const promises = [
  {
    icon: 'shield',
    title: 'Verified people',
    body: 'Artisans checked before their first job. Savings members verified before money moves.',
  },
  {
    icon: 'tag',
    title: 'Fair prices, upfront',
    body: "You see what you'll pay before you commit. No surprises on the doorstep.",
  },
  {
    icon: 'lock',
    title: 'Your data, protected',
    body: 'We keep only what a product needs. Sensitive details are checked, then discarded.',
  },
] as const;
