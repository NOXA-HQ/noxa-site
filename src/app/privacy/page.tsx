import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { privacy } from '@/content/legal';

export const metadata: Metadata = { title: privacy.title, description: privacy.lead };

export default function Privacy() {
  return <LegalPage doc={privacy} other={{ label: 'terms of use', href: '/terms' }} />;
}
