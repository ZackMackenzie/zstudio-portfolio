import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Contact } from '@/components/sections/Contact';

// Visual-first, single-page flow: Hero -> Selected Work (6 full-width
// editorial spreads, no subpages) -> Services (grouped by discipline) ->
// About (the site's one light "paper" editorial pause) -> Process ->
// Contact. Footer (global, in layout.tsx) stays a slim status/copyright
// bar — Contact above it is the actual conversion hub.
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  );
}
