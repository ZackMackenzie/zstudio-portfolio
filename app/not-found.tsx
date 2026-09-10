import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center py-section">
      <span className="label text-accent">Erro 404</span>
      <h1 className="mt-6 font-display text-4xl font-medium tracking-tightest md:text-5xl">
        Esta página
        <br />
        não existe.
      </h1>
      <p className="mt-6 max-w-md text-dim">
        O link está quebrado ou a página mudou de lugar. Todo o resto está a um clique.
      </p>
      <Link
        href="/"
        className="link-underline mt-10 w-fit font-mono text-xs uppercase tracking-[0.16em]"
      >
        ← Voltar ao início
      </Link>
    </section>
  );
}
