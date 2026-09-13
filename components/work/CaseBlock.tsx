import type { CaseBlock as Block } from '@/content/projects';
import { Media } from '@/components/ui/Media';
import { Reveal } from '@/components/ui/Reveal';

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

export function CaseBlock({
  block,
  headings,
}: {
  block: Block;
  headings: Record<Block['type'], string>;
}) {
  const label = headings[block.type];

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

    case 'result':
      return (
        <BlockShell label={label}>
          <Reveal>
            <p className="max-w-prose text-lg leading-relaxed md:text-xl">{block.body}</p>
          </Reveal>
        </BlockShell>
      );

    case 'design':
      return (
        <BlockShell label={label} wide>
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
