import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Services } from '@/components/sections/Services';
import { Guarantees } from '@/components/sections/Guarantees';

// Visual-first, single-page flow: Hero -> Curated Work -> Capabilities ->
// Guarantees. Footer (global, in layout.tsx) is the conversion hub — no
// separate About/Contact sections; direct WhatsApp/email/booking do that job.
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <Guarantees />
    </>
  );
}
