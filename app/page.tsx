import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';

// Hierarchy is intentionally short: Hero -> Selected Work -> Services ->
// About (folds in the Capabilities/stack strip) -> Contact. The Lab section
// and the old standalone Capabilities section were removed in the 2026-09
// simplification pass to keep the page focused (see git history to restore
// components/sections/Experiments.tsx + Capabilities.tsx if wanted later).
export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Contact />
    </>
  );
}
