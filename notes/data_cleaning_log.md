# Data Cleaning Log

## Source File
- **Input:** `data/raw.csv`
- **Outputs:** `data/clean.csv`, `data/export.json`
- **Script:** `cleanData.js`

## Changes Made

### 1. Header Normalization
- Trimmed leading/trailing whitespace from all column names
- Converted all headers to lowercase
- Replaced spaces with underscores (e.g. `First Name` → `first_name`)
- **Why:** Consistent headers prevent key-mismatch bugs and follow JS/SQL naming conventions

### 2. Type Normalization
- Numeric strings converted to JavaScript numbers (e.g. `"42"` → `42`)
- Boolean strings converted to booleans (`"true"` → `true`, `"false"` → `false`)
- Date strings formatted to ISO `YYYY-MM-DD` for consistency
- **Why:** Storing numbers as strings causes incorrect sorting and math errors

### 3. Null Handling
- Empty strings, `"null"`, `"N/A"`, and whitespace-only values all normalized to `null` in JSON
- Null values exported as empty strings in CSV for spreadsheet compatibility
- **Why:** Inconsistent null representations cause issues in downstream analysis

## Output Summary
- `data/clean.csv` — cleaned data in CSV format (nulls as empty strings)
- `data/export.json` — cleaned data as JSON array (nulls as `null`)