const pdfLib = require('pdf-parse');
console.log('PDFParse type:', typeof pdfLib.PDFParse);
console.log('PDFParse toString:', pdfLib.PDFParse.toString());
// Try to call it if it's a function

(async () => {
  try {
    const fs = require('fs');
    const path = require('path');
    const file = path.resolve(__dirname, '../assets/trabalho/TRABALHO - Gestão de Projetos.docx.pdf');
    const bufferRaw = fs.readFileSync(file);
    const buffer = new Uint8Array(bufferRaw);


    console.log('Testing PDFParse with buffer...');

    try {
      // pdf-parse v1 style: pdf(buffer)
      // But pdfLib is object. Maybe pdfLib.default(buffer)?
      if (pdfLib.default) {
        const res = await pdfLib.default(buffer);
        console.log('pdfLib.default(buffer) success, text length:', res.text.length);
      }
    } catch (e) { console.log('pdfLib.default(buffer) failed:', e.message); }

    try {
      // Maybe it's pdfLib(buffer) if it was a function (we know it's not)
      // Try pdfLib.PDFParse(buffer)
      const res = await pdfLib.PDFParse(buffer);
      console.log('pdfLib.PDFParse(buffer) success, text length:', res.text.length);
    } catch (e) { console.log('pdfLib.PDFParse(buffer) failed:', e.message); }

    try {
      const instance = new pdfLib.PDFParse(buffer);
      console.log('new pdfLib.PDFParse(buffer) success');
      console.log('Instance keys:', Object.keys(instance));
      // Check if there is a 'text' property or method
      if (typeof instance.text === 'string') console.log('Found .text property');
      if (typeof instance.extractText === 'function') console.log('Found .extractText method');
      console.log('Prototype methods:', Object.getOwnPropertyNames(Object.getPrototypeOf(instance)));
      console.log('Trying getText()...');
      const textRes = instance.getText();
      if (textRes && typeof textRes.then === 'function') {
        console.log('getText() returns a promise');
        const text = await textRes;
        console.log('getText() result type:', typeof text);
        console.log('getText() result:', JSON.stringify(text).substring(0, 200));

      } else {
        console.log('getText() returns direct value, length:', textRes.length);
      }
      if (instance.doc) {
        console.log('Doc keys:', Object.keys(instance.doc));
        // check if doc is a promise
        if (instance.doc.then) console.log('Doc is a promise');
      }

    } catch (e) { console.log('new pdfLib.PDFParse(buffer) failed:', e.message); }

  } catch (e) {
    console.log(e);
  }
})();
