import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { terms } from '@/content/legal';

export const metadata: Metadata = { title: terms.title, description: terms.lead };

export default function Terms() {
  return <LegalPage doc={terms} other={{ label: 'privacy notice', href: '/privacy' }} />;
}
