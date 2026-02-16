
const fs = require('fs');
const path = require('path');
const pdfLib = require('pdf-parse'); // This is v2+ apparently

const assetsMateriaDir = path.resolve(__dirname, '../assets/materia');
const assetsMateriaDir2 = path.resolve(__dirname, '../assets/materia'); // duplicate variable?
const assetsTrabalhoDir = path.resolve(__dirname, '../assets/trabalho');
const outputDir = path.resolve(__dirname, '../src');

async function readPdf(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const uint8Array = new Uint8Array(dataBuffer);

  // Instantiate PDFParse
  let instance;
  try {
    instance = new pdfLib.PDFParse(uint8Array);
  } catch (e) {
    // Fallback or retry?
    throw new Error(`Failed to instantiate PDFParse: ${e.message}`);
  }

  const result = await instance.getText();
  // Assuming result structure: { pages: [ { text: "..." }, ... ] }
  if (result && result.pages && Array.isArray(result.pages)) {
    return result.pages.map(p => p.text).join('\n');
  } else if (result && typeof result.text === 'string') {
    return result.text;
  } else if (typeof result === 'string') {
    return result;
  }

  return JSON.stringify(result);
}

async function processDir(directory, outputFile) {
  console.log(`Reading files from ${directory}...`);
  if (!fs.existsSync(directory)) {
    console.log(`Directory ${directory} found.`);
    return;
  }

  const files = fs.readdirSync(directory).filter(file => file.toLowerCase().endsWith('.pdf'));
  let allContent = '';

  for (const file of files) {
    console.log(`Processing ${file}...`);
    const filePath = path.join(directory, file);
    try {
      const text = await readPdf(filePath);
      allContent += `\n\n# FILE: ${file}\n\n${text}`;
    } catch (err) {
      console.error(`Error reading ${file}:`, err);
    }
  }

  const outputPath = path.join(outputDir, outputFile);
  fs.writeFileSync(outputPath, allContent);
  console.log(`Saved content to ${outputPath}`);
}

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  await processDir(assetsMateriaDir, 'all_materials.txt');
  await processDir(assetsTrabalhoDir, 'project_description.txt');
}

main();
