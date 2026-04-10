type FooterGroup = {
  title: string;
  items: string[];
};

type FooterProps = {
  groups: FooterGroup[];
};

export default function Footer({ groups }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_repeat(3,1fr)] lg:px-8">
        <div className="space-y-5">
          <p className="font-display text-3xl font-semibold tracking-tight text-[#0052ff]">
            coinbase
          </p>
          <p className="max-w-sm text-sm leading-7 text-slate-600">
            The most trusted place for people and businesses to buy, sell, and use crypto.
          </p>
          <p className="text-sm text-slate-500">© 2026 Coinbase Clone Build</p>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              {group.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-600 transition hover:text-slate-950">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
