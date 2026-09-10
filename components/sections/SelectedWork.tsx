import Link from 'next/link';
import { projects } from '@/content/projects';
import { ProjectListItem } from '@/components/work/ProjectListItem';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/ui/Reveal';

export function SelectedWork() {
  return (
    <section id="work" className="shell scroll-mt-24 py-section">
      <SectionHeader index={1} label="Selected Work" title={['Selected', 'work']} />

      <div className="mt-14 md:mt-20">
        {projects.map((project, i) => (
          <ProjectListItem key={project.slug} project={project} index={i + 1} />
        ))}
        <div className="border-t border-line" />
      </div>

      <Reveal className="mt-10">
        <p className="max-w-prose text-sm text-dim">
          Case studies are being published progressively. Each entry links to a full
          breakdown — challenge, approach, design, build and motion.
        </p>
        <Link
          href="/work/saas-product-platform"
          className="link-underline mt-4 inline-block font-mono text-xs uppercase tracking-[0.16em]"
        >
          Open a case study →
        </Link>
      </Reveal>
    </section>
  );
}
