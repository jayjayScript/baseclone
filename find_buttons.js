const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const regex = /<form[^>]*>/gi;
const matches = html.match(regex);

if (matches) {
  console.log(matches);
} else {
  console.log('Not found');
}
