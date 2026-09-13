import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Services } from '@/components/sections/Services';

// Visual-first, single-page flow: Hero (headline + quick-metrics bar) ->
// Curated Work (4 self-contained cards, no subpages) -> Capabilities matrix.
// Footer (global, in layout.tsx) is the conversion hub — no separate
// About/Contact sections; direct WhatsApp/email/clock do that job.
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
    </>
  );
}
