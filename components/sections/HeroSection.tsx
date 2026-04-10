import styles from "../../styles/home.module.css";

type Stat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  stats: Stat[];
};

export default function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(0,82,255,0.13),_transparent_38%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-[#cfe0ff] bg-[#eef4ff] px-4 py-2 text-sm font-semibold text-[#0052ff]">
            Jump start your crypto portfolio
          </div>
          <h1 className="font-display text-5xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
            The future of money is here
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            We’re rebuilding this landing page as a fast, component-based Next.js experience with
            the same calm polish, strong hierarchy, and signature Coinbase blue.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-[#0052ff] px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_50px_rgba(0,82,255,0.28)] transition hover:bg-[#0047dd]"
            >
              Get started
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-300 px-7 py-3.5 text-base font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              View pricing
            </button>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.06)]">
                <dt className="text-sm text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className={styles.heroGlow} />
          <div className={`${styles.heroPanel} relative mx-auto max-w-[560px]`}>
            <div className="flex items-center justify-between border-b border-white/70 px-6 py-5">
              <div>
                <p className="text-sm font-medium text-slate-500">Portfolio balance</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">$12,480.42</p>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-600">
                +8.24%
              </div>
            </div>

            <div className="grid gap-4 p-6">
              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className={`${styles.miniChart} rounded-[24px] p-5`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500">Watchlist</p>
                      <p className="mt-1 text-xl font-semibold text-slate-950">BTC, ETH, SOL</p>
                    </div>
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#0052ff]">
                      Live market
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-8 items-end gap-2">
                    {[38, 54, 44, 70, 52, 86, 68, 96].map((height) => (
                      <span
                        key={height}
                        className="rounded-full bg-[#0052ff]/85"
                        style={{ height: `${height}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] bg-slate-950 p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.25)]">
                  <p className="text-sm text-white/70">Earn rewards</p>
                  <p className="mt-2 text-3xl font-semibold">Up to 8%</p>
                  <p className="mt-3 text-sm leading-6 text-white/75">
                    Put your idle assets to work with a clean, trusted onboarding flow.
                  </p>
                </div>
              </div>

              <div className="grid gap-3 rounded-[28px] border border-slate-200 bg-white p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
                {[
                  ["Bitcoin", "$91,482.55", "+3.12%"],
                  ["Ethereum", "$4,835.11", "+5.61%"],
                  ["USDC", "$1.00", "Stable"],
                ].map(([name, price, delta]) => (
                  <div key={name} className="flex items-center justify-between rounded-[20px] bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className={styles.assetDot} aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-slate-950">{name}</p>
                        <p className="text-sm text-slate-500">Popular asset</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-950">{price}</p>
                      <p className="text-sm text-emerald-600">{delta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
