const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./credentials.json');
const { promisify } = require('util');

const docId = '13yWi4XbloPgHJ48M1H4dDm_6WpJyhQif3iXZyCm8zfU';

const accessSheet = async() => {
  const doc = new GoogleSpreadsheet(docId);
  await promisify(doc.useServiceAccountAuth)(credentials);
  const info = await promisify(doc.getInfo)();
  console.log(info);
}
accessSheet();
