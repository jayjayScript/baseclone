export const navigationLinks = ["Crypto", "Individuals", "Businesses", "Developers", "Company"];

export const stats = [
  { label: "Verified users", value: "110M+" },
  { label: "Assets supported", value: "250+" },
  { label: "Countries served", value: "100+" },
];

export const assets = [
  { name: "Bitcoin", ticker: "BTC", price: "$91,482.55", move: "+3.12% today", positive: true },
  { name: "Ethereum", ticker: "ETH", price: "$4,835.11", move: "+5.61% today", positive: true },
  { name: "Solana", ticker: "SOL", price: "$214.18", move: "+7.20% today", positive: true },
  { name: "USDC", ticker: "USDC", price: "$1.00", move: "Stable digital dollar", positive: false },
];

export const upsellCards = [
  {
    eyebrow: "Companies",
    title: "Move money globally with confidence.",
    description:
      "A premium card layout for businesses that want settlement, treasury, and payment infrastructure in one place.",
    image: "company" as const,
  },
  {
    eyebrow: "Institutions",
    title: "Trusted by institutions and government.",
    description:
      "Structured for clarity, this section mirrors the clean editorial feel of the original homepage while staying responsive.",
    image: "institution" as const,
  },
  {
    eyebrow: "Developers",
    title: "Ship onchain products faster.",
    description:
      "Composable TSX sections make it straightforward to expand the experience with more product surfaces later.",
    image: "developer" as const,
  },
];

export const footerGroups = [
  { title: "Company", items: ["About", "Careers", "Affiliates", "Blog"] },
  { title: "Products", items: ["Buy crypto", "Prime", "Wallet", "Commerce"] },
  { title: "Support", items: ["Help center", "Contact us", "Status", "Taxes"] },
];
