import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="shell flex min-h-[80svh] flex-col justify-center py-section">
      <span className="label text-accent">Error 404</span>
      <h1 className="mt-6 font-display text-4xl font-medium tracking-tightest md:text-5xl">
        This page
        <br />
        doesn’t exist.
      </h1>
      <p className="mt-6 max-w-md text-dim">
        The link is broken or the page has moved. Everything else is one click away.
      </p>
      <Link
        href="/"
        className="link-underline mt-10 w-fit font-mono text-xs uppercase tracking-[0.16em]"
      >
        ← Back to home
      </Link>
    </section>
  );
}
