'use client';

import { useI18n } from '@/lib/i18n/LanguageProvider';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';

/**
 * Short, scannable turnaround/guarantee strip — three pills, no section
 * header ceremony. Sits between Services and the Footer conversion hub.
 */
export function Guarantees() {
  const { dict } = useI18n();

  return (
    <section className="shell py-section">
      <RevealGroup className="flex flex-col gap-3 border-t border-line pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 sm:pt-12">
        {dict.guarantees.items.map((g) => (
          <RevealItem key={g}>
            <span className="inline-flex items-center rounded-pill border border-line px-4 py-2 font-mono text-xs text-dim">
              {g}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
