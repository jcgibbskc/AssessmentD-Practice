import fs from 'fs';
import path from 'path';
import csv from 'csv-parser'; // npm install csv-parser fs
import { fileURLToPath } from 'url';
// Configure logging
const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${message}`);
};
// File path
const RAW = path.join('data', 'raw.csv');
// Main function
async function main() {
  log('Starting process...');
  // Check if file exists
  if (!fs.existsSync(RAW)) {
    log(`File not found: ${RAW}`);
    return;
  }
  // Read CSV
  const rows = [];
  const columnsSet = new Set();
  await new Promise((resolve, reject) => {
    fs.createReadStream(RAW)
      .pipe(csv())
      .on('data', (row) => {
        rows.push(row);
        Object.keys(row).forEach((col) => columnsSet.add(col));
      })
      .on('end', () => {
        resolve();
      })
      .on('error', (err) => {
        reject(err);
      });
  });

  log(`Loaded ${rows.length} rows and ${columnsSet.size} columns from ${RAW}.`);

  // Show first few rows
  log('Preview of data:');
  console.log(rows.slice(0, 5));
}
// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
