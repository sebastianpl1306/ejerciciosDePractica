const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(' ').length;

//Buscar todas las palabras con react
const regex = new RegExp(/react/gi);
const reactWordCount = content.match(regex ?? []).length;

console.log('Palabras: ', wordCount);
console.log('Palabras: ', reactWordCount);