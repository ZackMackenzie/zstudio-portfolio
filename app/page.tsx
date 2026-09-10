import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Capabilities } from '@/components/sections/Capabilities';
import { Experiments } from '@/components/sections/Experiments';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Services />
      <About />
      <Capabilities />
      <Experiments />
      <Contact />
    </>
  );
}
