import Image, { type StaticImageData } from "next/image";
import companyImage from "../../images/company_upsell.png";
import developerImage from "../../images/developers_upsell_cdxv2_2.jpg";
import institutionImage from "../../images/institutions_upsell.png";
import styles from "../../styles/home.module.css";

type Card = {
  eyebrow: string;
  title: string;
  description: string;
  image: "company" | "developer" | "institution";
};

type UpsellSectionProps = {
  cards: Card[];
};

const imageMap: Record<Card["image"], StaticImageData> = {
  company: companyImage,
  developer: developerImage,
  institution: institutionImage,
};

export default function UpsellSection({ cards }: UpsellSectionProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0052ff]">
            Beyond retail
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Trusted by companies, institutions, and developers.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Sections are split into focused TSX components so we can keep this landing page
            accurate, maintainable, and easy to iterate on.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`${styles.upsellCard} overflow-hidden rounded-[34px] border border-slate-200 bg-white`}
            >
              <div className="border-b border-slate-100 px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              </div>
              <div className="p-4">
                <Image
                  src={imageMap[card.image]}
                  alt={card.title}
                  className="h-[280px] w-full rounded-[24px] object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
