const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Find sign-in related links
const signMatches = [];
const re1 = /href="([^"]*sign[^"]*)"/gi;
let m;
while ((m = re1.exec(html)) !== null) {
  signMatches.push(m[1]);
  if (signMatches.length >= 20) break;
}
console.log('SIGN LINKS:', signMatches);

// Find referral links
const refMatches = [];
const re2 = /href="([^"]*ref[^"]*)"/gi;
while ((m = re2.exec(html)) !== null) {
  refMatches.push(m[1]);
  if (refMatches.length >= 20) break;
}
console.log('REF LINKS:', refMatches);

// Count occurrences of sign in text
const signInCount = (html.match(/sign.?in/gi) || []).length;
console.log('SIGN-IN text count:', signInCount);

// Check what href patterns exist that might be sign-in buttons
const allHrefs = [];
const re3 = /href="([^"]{1,100})"/gi;
while ((m = re3.exec(html)) !== null) {
  const h = m[1];
  if (!h.startsWith('http') && !h.startsWith('#') && !h.startsWith('css/') && !h.startsWith('js/') && !h.startsWith('images/') && !h.startsWith('/manifest')) {
    allHrefs.push(h);
  }
}
console.log('INTERNAL HREFS (unique):', [...new Set(allHrefs)]);
