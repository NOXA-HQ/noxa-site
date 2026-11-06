import { company, founder, links } from './site';

/**
 * The privacy notice and terms for noxasoftwares.com.
 *
 * Written for what this site actually does today: no forms, no cookies, no analytics,
 * fonts and images served from our own domain. If that changes (a newsletter form,
 * analytics, a careers form), update the matching section and `updated`.
 *
 * Once Noxa is registered as a company in Portugal, change `controller` to the
 * company's legal name, NIPC and registered address.
 */
export const controller = {
  name: `${founder.name}, trading as ${company.legalName} (“Noxa”)`,
  place: company.location,
  email: links.email,
};

export type LegalSection = { title: string; body: (string | string[])[] };
export type LegalDoc = { title: string; lead: string; updated: string; sections: LegalSection[] };

export const privacy: LegalDoc = {
  title: 'Privacy notice',
  lead: 'What this website collects about you, why, and what you can ask us to do about it. Short version: very little.',
  updated: '2026-11-06',
  sections: [
    {
      title: 'Who we are',
      body: [
        `This website, noxasoftwares.com, is run by ${controller.name}, based in the ${controller.place}. For this site, Noxa is the “controller” of your personal data under the EU General Data Protection Regulation (GDPR).`,
        `Questions about privacy go to ${controller.email}.`,
      ],
    },
    {
      title: 'This notice covers this website only',
      body: [
        'Each Noxa product has its own privacy notice, because each collects different things. Dashfixe’s is on dashfixe.com. When you follow a link from here to a product, its notice applies there.',
      ],
    },
    {
      title: 'What we collect',
      body: [
        [
          'Emails you send us. If you write to hello@ or careers@ (including through the “Contact us”, “Get notified” and careers buttons, which open your own email app), we receive your email address, your name if you include it, and whatever you write.',
          'Basic server logs. Like every website, our hosting provider records technical details when a page is requested: IP address, date and time, the page asked for, browser type, and whether it worked. These are used to keep the site running and secure.',
        ],
        'We do not use cookies, analytics, advertising trackers or social-media pixels on this site, and we do not build profiles of visitors. There are no forms on the site that send data to us.',
      ],
    },
    {
      title: 'Why we use it, and on what legal basis',
      body: [
        [
          'To reply to your email and follow up on what you asked about, such as a product waitlist or a job — our legitimate interest in answering you, or steps you ask for before a contract (GDPR art. 6(1)(f) and 6(1)(b)).',
          'To keep the website available, secure and free of abuse, using server logs — our legitimate interest in running a safe website (art. 6(1)(f)).',
        ],
        'We never sell your data, and we do not use it for automated decisions about you.',
      ],
    },
    {
      title: 'Who else handles it',
      body: [
        [
          'Vercel Inc. hosts this website and processes the server logs on our behalf.',
          'Our email provider stores the emails you send us.',
        ],
        'Some of these providers are based in, or use servers in, the United States. Where data leaves the European Economic Area, the transfer is covered by the European Commission’s Standard Contractual Clauses and, where the provider is certified, the EU–US Data Privacy Framework.',
        'We may also share data if the law requires it, for example to answer a valid request from a court or authority.',
      ],
    },
    {
      title: 'How long we keep it',
      body: [
        [
          'Emails: as long as the conversation is active, then up to 2 years, unless it becomes part of a contract or a job application you want us to keep on file. Ask and we’ll delete it sooner.',
          'Server logs: kept by our hosting provider for a short period, typically days to a few weeks, then deleted automatically.',
        ],
      ],
    },
    {
      title: 'Your rights',
      body: [
        'Under the GDPR you can ask us to: see the personal data we hold about you; correct it; delete it; limit how we use it; give it to you in a portable format; and you can object to our use of it based on legitimate interest.',
        `Email ${controller.email} and we will answer within one month. We may ask you to confirm who you are first.`,
        'If you think we have handled your data badly, you can complain to the Portuguese data protection authority, the Comissão Nacional de Proteção de Dados (CNPD, cnpd.pt), or to the authority where you live. We’d appreciate the chance to fix it first.',
      ],
    },
    {
      title: 'Children',
      body: ['This site is for adults. We do not knowingly collect data from children under 16.'],
    },
    {
      title: 'Changes',
      body: ['If what this site collects changes, we will update this notice and the date at the top.'],
    },
  ],
};

export const terms: LegalDoc = {
  title: 'Terms of use',
  lead: 'The rules for using noxasoftwares.com. They are short because the site is simple: it tells you about Noxa and its products.',
  updated: '2026-11-06',
  sections: [
    {
      title: 'Who we are',
      body: [
        `noxasoftwares.com is run by ${controller.name}, based in the ${controller.place}. You can reach us at ${controller.email}.`,
        'By using this site you agree to these terms. If you don’t agree, please don’t use it.',
      ],
    },
    {
      title: 'Our products have their own terms',
      body: [
        'This site describes Noxa products but does not sell or provide them. Using a product — for example booking a job on Dashfixe — is governed by that product’s own terms and privacy notice, on its own website or app.',
        'Products marked “coming soon”, “pre-launch” or similar are not available yet. Descriptions of them show what we plan to build and may change.',
      ],
    },
    {
      title: 'Content and trademarks',
      body: [
        'The text, design, logos and images on this site belong to Noxa or are used with permission. “Noxa”, “NoxaSoftwares”, “Dashfixe”, “Noxa Save” and their logos are our names and marks.',
        'You may read, share links to, and quote short parts of this site with credit. Please don’t copy the site, reuse our logos, or present yourself as Noxa or as working with us without our written permission.',
      ],
    },
    {
      title: 'Using the site fairly',
      body: [
        'Don’t try to break, overload, scrape at scale, or get unauthorised access to the site or the systems behind it, and don’t use it for anything unlawful.',
      ],
    },
    {
      title: 'Accuracy and availability',
      body: [
        'We work to keep this site accurate and online, but we provide it “as is”: information, including news and product plans, may be incomplete or out of date, and the site may sometimes be unavailable.',
        'Nothing on this site is an offer, investment advice, or a promise of a job.',
      ],
    },
    {
      title: 'Links to other websites',
      body: [
        'We link to our products and to other sites such as GitHub and LinkedIn. We are not responsible for websites we don’t run.',
      ],
    },
    {
      title: 'Liability',
      body: [
        'As far as the law allows, we are not liable for losses arising from using this site or relying on its content. Nothing in these terms limits liability that cannot be limited by law, or your rights as a consumer.',
      ],
    },
    {
      title: 'Law and disputes',
      body: [
        'These terms are governed by Portuguese law. If you are a consumer, you also keep the protection of the mandatory laws of the country where you live, and you can bring a claim in your local courts.',
        'If something goes wrong, please email us first — most things can be solved that way.',
      ],
    },
    {
      title: 'Changes',
      body: ['We may update these terms. The date at the top shows the latest version.'],
    },
  ],
};
