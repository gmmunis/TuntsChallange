const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./credentials.json');
const { promisify } = require('util');

const docId = '13yWi4XbloPgHJ48M1H4dDm_6WpJyhQif3iXZyCm8zfU';

// var aluno = "";
// var p1 = 0;
// var p2 = 0;
// var p3 = 0;
// var media = 0;
// var percentualfaltas;
// var totaldeaula = 0;
// var totaldefaltas = 0;

// media = (p1 + p2 + p3) / 3;
// console.log(aluno + " Sua media e " + media);

// percentualfaltas = (totaldefaltas * 100) / totaldeaula;
// console.log(aluno+" seu percentual de faltas é "+percentualfaltas);

// if ((media >= 7) && (percentualfaltas <= 25)) {
//   console.log('Parabéns! Você foi aprovado');
// } else {
//   console.log('Que pena! Você foi reprovado');
// }

const accessSheet = async () => {
  const doc = new GoogleSpreadsheet(docId);
  await promisify(doc.useServiceAccountAuth)(credentials);
  const info = await promisify(doc.getInfo)();
  const worksheet = info.worksheets[0];
  const rows = await promisify(worksheet.getRows)({

  });
  rows.forEach(row => {
    console.log(row._cokwr, row._cpzh4, row._cre1l, row._chk2m, row._ciyn3, row._ckd7g, row._clrrx);
  });

  //console.log(rows);
  //console.log(info);
}
accessSheet();
