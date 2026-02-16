
const pdfLib = require('pdf-parse');
console.log('Type of pdfLib:', typeof pdfLib);
console.log('Keys of pdfLib:', Object.keys(pdfLib));
console.log('pdfLib (stringified):', JSON.stringify(pdfLib, null, 2));
if (typeof pdfLib === 'object') {
  console.log('Is it a promise?', pdfLib instanceof Promise);
}
