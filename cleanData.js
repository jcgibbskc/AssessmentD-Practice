const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { stringify } = require('csv-stringify/sync');

const inputPath = path.join(__dirname, 'data', 'raw.csv');
const cleanCsvPath = path.join(__dirname, 'data', 'clean.csv');
const exportJsonPath = path.join(__dirname, 'data', 'export.json');

const rows = [];

fs.createReadStream(inputPath)
  .pipe(csv())
  .on('data', (row) => {
    rows.push(row);
  })
  .on('end', () => {
    console.log(`Raw rows read: ${rows.length}`);

    // --- 1. Fix Headers ---
    // Trim whitespace, lowercase, replace spaces with underscores
    const cleanRows = rows.map((row) => {
      const cleaned = {};
      for (const key in row) {
        const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
        cleaned[cleanKey] = row[key];
      }
      return cleaned;
    });

    // --- 2. Normalize Types & Handle Nulls ---
    const finalRows = cleanRows.map((row) => {
      const out = {};
      for (const key in row) {
        let val = row[key];

        // Handle nulls / empty strings
        if (val === undefined || val === null || val.trim() === '' || val.toLowerCase() === 'null' || val.toLowerCase() === 'n/a') {
          out[key] = null;
          continue;
        }

        val = val.trim();

        // Normalize booleans
        if (val.toLowerCase() === 'true') { out[key] = true; continue; }
        if (val.toLowerCase() === 'false') { out[key] = false; continue; }

        // Normalize numbers
        if (!isNaN(val) && val !== '') {
          out[key] = Number(val);
          continue;
        }

        // Normalize dates (basic ISO detection)
        const dateAttempt = new Date(val);
        if (!isNaN(dateAttempt.getTime()) && /\d{4}/.test(val)) {
          out[key] = dateAttempt.toISOString().split('T')[0]; // YYYY-MM-DD
          continue;
        }

        // Default: keep as trimmed string
        out[key] = val;
      }
      return out;
    });

    console.log(`Cleaned rows: ${finalRows.length}`);
    console.log('Sample cleaned row:', finalRows[0]);

    // --- 3. Export clean.csv ---
    // Replace nulls with empty string for CSV compatibility
    const csvReady = finalRows.map((row) => {
      const out = {};
      for (const key in row) {
        out[key] = row[key] === null ? '' : row[key];
      }
      return out;
    });

    const csvOutput = stringify(csvReady, { header: true });
    fs.writeFileSync(cleanCsvPath, csvOutput);
    console.log(`Exported: data/clean.csv`);

    // --- 4. Export export.json ---
    fs.writeFileSync(exportJsonPath, JSON.stringify(finalRows, null, 2));
    console.log(`Exported: data/export.json`);

    console.log('Cleaning complete!');
  });