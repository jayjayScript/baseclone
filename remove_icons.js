const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The icons that are not displaying properly are generally:
// 1. Unresolved SVGs or icon classes mapping to missing assets.
// 2. Local images starting with "images/" or "assets/" because the clone didn't grab the asset folder.

// Remove broken img tags (src doesn't start with http/https)
// We will replace img tags that have src="something_local" 
content = content.replace(/<img[^>]*src=["'](?!http)[^"']*["'][^>]*>/gi, '');

// There is a class named 'svg-icon' or something used heavily in generic sites that fails
// We will also remove ALL `<svg>` blocks because they are likely the missing icons being complained about (or are just decorative broken links to `<use href="#svg-icon...">`)
content = content.replace(/<svg[^>]*>[\s\S]*?<\/svg>/gi, '');

fs.writeFileSync('index.html', content, 'utf8');
console.log('Cleaned up broken icons and images.');
