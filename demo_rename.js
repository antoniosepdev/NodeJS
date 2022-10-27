var fs = require('fs');

fs.rename('mynewfile1.txt', 'archivo_de_prueba.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});