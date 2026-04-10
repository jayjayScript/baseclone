export default function CtaSection() {
  return (
    <section className="bg-[#0052ff]">
      <div className="mx-auto max-w-7xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
          Take control of your money
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          Start your portfolio today and discover crypto built for the next generation of finance.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          The page is now structured for maintainability, while keeping the crisp spacing, soft
          shadows, and blue-forward visual language users expect.
        </p>
        <button
          type="button"
          className="mt-10 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[#0052ff] shadow-[0_24px_70px_rgba(0,0,0,0.18)] transition hover:bg-slate-100"
        >
          Sign up now
        </button>
      </div>
    </section>
  );
}
