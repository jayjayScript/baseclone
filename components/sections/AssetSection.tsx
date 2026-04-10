type Asset = {
  name: string;
  ticker: string;
  price: string;
  move: string;
  positive?: boolean;
};

type AssetSectionProps = {
  assets: Asset[];
};

export default function AssetSection({ assets }: AssetSectionProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0052ff]">
              Explore markets
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Explore crypto like Bitcoin, Ethereum, and Dogecoin.
            </h2>
          </div>
          <button
            type="button"
            className="w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
          >
            View all assets
          </button>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {assets.map((asset) => (
            <article
              key={asset.ticker}
              className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-950">{asset.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{asset.ticker}</p>
                </div>
                <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#0052ff]">
                  Trade
                </span>
              </div>

              <div className="mt-10">
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{asset.price}</p>
                <p className={`mt-2 text-sm font-medium ${asset.positive ? "text-emerald-600" : "text-slate-500"}`}>
                  {asset.move}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
