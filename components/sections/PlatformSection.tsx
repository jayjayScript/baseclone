import Image from "next/image";
import protocolImage from "../../images/onchain_payment_protocol.png";
import styles from "../../styles/home.module.css";

export default function PlatformSection() {
  return (
    <section className="border-b border-slate-200 bg-[#f7faff]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0052ff]">
              Build onchain
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Access USDC and modern onchain payment rails.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              A modular component architecture makes it much easier to reuse hero blocks, feature
              rows, and product cards without sacrificing the smooth, premium feel of the original.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Fast onboarding flows",
                "Clean responsive cards",
                "Tailwind for layout speed",
                "Custom CSS for fine polish",
              ].map((item) => (
                <div key={item} className="rounded-[24px] border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.mediaCard} relative overflow-hidden rounded-[40px] p-4`}>
            <Image
              src={protocolImage}
              alt="Onchain payment protocol preview"
              className="h-auto w-full rounded-[28px] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
