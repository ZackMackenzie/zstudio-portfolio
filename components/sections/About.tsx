'use client';

import { motion } from 'framer-motion';
import { MotionText } from '@/components/ui/MotionText';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { formatIndex } from '@/lib/utils';
import { viewport } from '@/lib/motion';

const pillars = [
  { label: 'Design', body: 'Composição, tipografia e direção de arte — a parte que as pessoas sentem antes de conseguir nomear.' },
  { label: 'Tecnologia', body: 'React e TypeScript em produção. Eu entrego o produto, não um handoff.' },
  { label: 'IA', body: 'Workflows modernos de IA para avançar mais rápido em pesquisa, exploração e produção.' },
  { label: 'Direção', body: 'Um ponto de vista único ligando estratégia, interface, movimento e lançamento.' },
];

const pipeline = ['Ideia', 'Estratégia', 'Design', 'Interface', 'Build', 'Motion', 'Lançamento'];

export function About() {
  return (
    <section id="about" className="paper scroll-mt-24 py-section">
      <div className="shell">
        <Reveal>
          <span className="label">
            <span className="text-accent">{formatIndex(3)}</span>
            <span className="mx-2 opacity-40">/</span>Sobre
          </span>
        </Reveal>

        <div className="mt-10 max-w-4xl">
          <MotionText
            as="p"
            lines={['Não desenho só', 'interfaces —', 'eu construo tudo.']}
            className="font-display text-2xl font-medium leading-[1.05] tracking-tighter md:text-3xl"
          />
          <p className="mt-8 font-serif text-xl italic text-dim md:text-2xl">
            Estratégia, design, interface, desenvolvimento e movimento — sob um único ponto de vista.
          </p>
        </div>

        <RevealGroup className="mt-16 grid gap-x-10 gap-y-10 border-t border-line pt-10 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <RevealItem key={p.label}>
              <p className="font-mono text-xs uppercase tracking-[0.14em]">{p.label}</p>
              <p className="mt-3 text-sm text-dim">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-16 grid gap-10 border-t border-line pt-10 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <p className="max-w-prose text-base leading-relaxed">
              Autodidata, e obcecado por isso. Aprendo construindo — levando um projeto do começo
              ao fim até funcionar, e então repetindo com um padrão mais alto. O resultado é
              autonomia: me dá uma ideia e eu levo de uma frase até uma experiência no ar.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="label mb-5">Como o trabalho flui</p>
            <ol className="flex flex-col">
              {pipeline.map((step, i) => (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 border-b border-line py-2.5"
                >
                  <span className="font-mono text-2xs text-dim">{formatIndex(i + 1)}</span>
                  <span className="font-display text-lg tracking-tight">{step}</span>
                  {i < pipeline.length - 1 && <span className="ml-auto text-dim">→</span>}
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
