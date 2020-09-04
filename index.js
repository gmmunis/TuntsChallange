const GoogleSpreadsheet = require('google-spreadsheet');
const credentials = require('./credentials.json');
const { promisify } = require('util');

const docId = '13yWi4XbloPgHJ48M1H4dDm_6WpJyhQif3iXZyCm8zfU';

var aluno = "";
var p1 = 0;
var p2 = 0;
var p3 = 0;
var media = 0;
var percentualfaltas;
var NotaFinal = 0;
var Situacao;
var NotaF;

console.error('Aluno | Faltas | P1 | P2 | P3 | Situação | Nota para Aprovação Final');
const accessSheet = async () => {
  const doc = new GoogleSpreadsheet(docId);
  await promisify(doc.useServiceAccountAuth)(credentials);
  const info = await promisify(doc.getInfo)();
  const worksheet = info.worksheets[0];
  const rows = await promisify(worksheet.getRows)({

  });
  rows.forEach(row => {
    //limpar linhas undefined
    aluno = row._cokwr == undefined ? "" : row._cokwr;
    faltas = row._cpzh4 == undefined ? "" : row._cpzh4;
    p1 = row._cre1l == undefined ? "" : row._cre1l;
    p2 = row._chk2m == undefined ? "" : row._chk2m;
    p3 = row._ciyn3 == undefined ? "" : row._ciyn3;
    Situacao = row._ckd7g == undefined ? "" : row._ckd7g;
    NotaFinal = row._clrrx == undefined ? "" : row._clrrx;

    media = (p1 + p2 + p3) / 3;

    media = parseInt(media);

    percentualfaltasGui = (faltas * 100) / 60;

    percentualfaltas = parseInt(faltas / 60 * 100);

    if (media < 5) {

      Situacao = 'Reprovado';

      NotaF = NotaFinal;

    } else if (media <= 5 && media < 7) {

      Situacao = 'Exame Final';

      NotaF = NotaFinal;

    } else if ((media >= 7) && (percentualfaltas <= 25)) {

      Situacao = "Aprovado";

      NotaF = 0;

    } else {

      Situacao = "Reprovado por falta";

      NotaF = NotaFinal;

    }
    console.log(aluno + ' | ' + faltas + ' | ' + p1 + ' | ' + p2 + ' | ' + p3 + ' | ' + Situacao + ' | ' + NotaFinal);
  });

  // console.log(rows);
  //console.log('('+info+')');
}
accessSheet();