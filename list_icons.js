const fs = require('fs');
const content = fs.readFileSync('index.html', 'utf8');

const imgs = content.match(/<img[^>]*>/gi) || [];
const svgs = content.match(/<svg[^>]*>[\s\S]*?<\/svg>/gi) || [];

console.log('Images:');
imgs.forEach(i => console.log(i));

console.log('\nSVGs:');
svgs.forEach(s => console.log(s.substring(0, 100) + '...'));
