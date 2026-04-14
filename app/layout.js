import Script from "next/script";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coinbase - Buy and Sell Bitcoin, Ethereum, and more with trust",
  description: "Coinbase is a secure platform that makes it easy to buy, sell, and store cryptocurrency like Bitcoin, Ethereum, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="smartsupp-loader" strategy="lazyOnload">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '455bb49d53f98bb41c2007155846762eb122ea85';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
