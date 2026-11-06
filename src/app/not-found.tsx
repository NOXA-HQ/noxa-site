import { Button, Container } from '@/components/ui';

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-28">
      <span className="text-sm font-bold tracking-[0.1em] text-muted uppercase">404</span>
      <h1 className="text-[clamp(40px,6vw,72px)] leading-[1.0] font-extrabold tracking-[-0.05em]">This star isn&rsquo;t on the map.</h1>
      <p className="text-lg text-muted">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Button href="/">Back home</Button>
    </Container>
  );
}
