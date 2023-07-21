const html = require ("./template/pdfTemplate")
const pdf = require('html-pdf');

// Opções de configuração para a biblioteca html-pdf
const options = {
    format: 'A4',
    orientation: 'portrait',
};

// Converter HTML para PDF usando html-pdf
pdf.create(html("David Emmanoel Rocha"), options).toFile('formulario_inscricao.pdf', function (err, res) {
    if (err) return console.log(err);
    console.log('PDF criado em: ' + res.filename);
});