 Your Tasks
// For submission, commit and push the edited file to Github

Your raw.csv file is below - ** Be sure to make a copy **
https://icstarschicago-my.sharepoint.com/:x:/g/personal/dsomborn_icstars_org/IQDGZaHvbWetQIEB1u3C3Ia1AfUk_63XEISYEm_wPpdP6Ks?e=SpOlEV

1. Run this in the terminal and install dependencies:

npm init -y
npm install csv-parser


2. Create a folder called “data” 

3. Import the raw CSV to the data folder (path should look like this /data/raw.csv)


4. On your own write a script that does the following:

Read raw CSV 
Fix Headers
Normalize Types
Handle Nulls
Export cleaned data to the data folder:
Path should look like this
/data/clean.csv 
/data/export.json 

5. Document:
   - Create notes/data_cleaning_log.md with what you cleaned and why.


** Hint ** 
To use the Script 

In the terminal run:
node Task1-runner.js

The Task1-runner.js script is provided as a “scaffold” to help you:
- Verify that you can read the raw CSV. *
- Inspect the first few rows before cleaning. *
- Log basic info about the dataset. *

Check the console output: 
It will show the number of rows and columns.
It will log a preview of the raw data.
