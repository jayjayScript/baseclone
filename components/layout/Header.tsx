import Link from "next/link";
import styles from "../../styles/home.module.css";

type HeaderProps = {
  links: string[];
};

export default function Header({ links }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className={styles.brandMark} aria-hidden="true" />
          <span className="font-display text-2xl font-semibold tracking-tight text-[#0052ff]">
            coinbase
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 sm:inline-flex"
          >
            Sign in
          </button>
          <button
            type="button"
            className="rounded-full bg-[#0052ff] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(0,82,255,0.24)] transition hover:bg-[#0047dd]"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
