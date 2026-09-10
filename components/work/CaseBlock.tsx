import type { CaseBlock as Block } from '@/content/projects';
import { Media } from '@/components/ui/Media';
import { MediaPlayer } from '@/components/ui/MediaPlayer';
import { Reveal } from '@/components/ui/Reveal';

const HEADINGS: Record<Block['type'], string> = {
  overview: 'Visão geral',
  challenge: 'Desafio',
  approach: 'Abordagem',
  design: 'Design',
  development: 'Desenvolvimento',
  motion: 'Motion',
  result: 'Resultado final',
  gallery: 'Galeria',
  technologies: 'Tecnologias',
};

function BlockShell({
  label,
  children,
  wide,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="shell border-t border-line py-14 md:py-20">
      <div className={wide ? '' : 'grid gap-8 md:grid-cols-[240px_1fr]'}>
        <Reveal>
          <h2 className="label md:sticky md:top-28">{label}</h2>
        </Reveal>
        <div className={wide ? 'mt-8' : ''}>{children}</div>
      </div>
    </section>
  );
}

export function CaseBlock({ block }: { block: Block }) {
  const label = HEADINGS[block.type];

  switch (block.type) {
    case 'overview':
      return (
        <BlockShell label={label}>
          <Reveal>
            <p className="max-w-prose text-lg leading-relaxed md:text-xl">{block.body}</p>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 md:grid-cols-4">
              {block.meta.map((m) => (
                <div key={m.label}>
                  <dt className="label">{m.label}</dt>
                  <dd className="mt-2 text-sm">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </BlockShell>
      );

    case 'challenge':
    case 'result':
      return (
        <BlockShell label={label}>
          <Reveal>
            <p className="max-w-prose text-lg leading-relaxed md:text-xl">{block.body}</p>
          </Reveal>
        </BlockShell>
      );

    case 'approach':
      return (
        <BlockShell label={label}>
          <Reveal>
            <p className="max-w-prose text-lg leading-relaxed md:text-xl">{block.body}</p>
            {block.steps && (
              <ol className="mt-8 flex flex-col border-t border-line">
                {block.steps.map((s, i) => (
                  <li key={i} className="flex gap-5 border-b border-line py-4">
                    <span className="font-mono text-2xs text-dim">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm md:text-base">{s}</span>
                  </li>
                ))}
              </ol>
            )}
          </Reveal>
        </BlockShell>
      );

    case 'design':
    case 'development':
      return (
        <BlockShell label={label}>
          <Reveal>
            <p className="max-w-prose text-lg leading-relaxed md:text-xl">{block.body}</p>
          </Reveal>
          {block.media && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {block.media.map((m, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <Media {...m} className="w-full" />
                </Reveal>
              ))}
            </div>
          )}
        </BlockShell>
      );

    case 'motion':
      return (
        <BlockShell label={label} wide>
          <Reveal>
            <p className="max-w-prose text-lg leading-relaxed md:text-xl">{block.body}</p>
            <div className="mt-8">
              {block.clipId ? (
                <MediaPlayer id={block.clipId} alt={`${label} — estudo de motion`} seed={block.clipId} />
              ) : (
                <Media alt="Estudo de motion" width={1600} height={900} seed="motion-fallback" accent />
              )}
            </div>
          </Reveal>
        </BlockShell>
      );

    case 'gallery':
      return (
        <BlockShell label={label} wide>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {block.media.map((m, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <Media {...m} className="w-full" />
              </Reveal>
            ))}
          </div>
        </BlockShell>
      );

    case 'technologies':
      return (
        <BlockShell label={label}>
          <Reveal>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {block.groups.map((g) => (
                <div key={g.label}>
                  <p className="label border-t border-line pt-3">{g.label}</p>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="text-sm text-dim">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </BlockShell>
      );

    default:
      return null;
  }
}
