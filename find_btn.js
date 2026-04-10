const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<([^>]+)data-testid="header-sign-in-button"/;
const match = regex.exec(html);

if (match) {
  const index = match.index;
  console.log(html.substring(Math.max(0, index - 3000), index));
} else {
  console.log('Not found');
}
