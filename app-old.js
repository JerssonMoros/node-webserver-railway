const http = require('http');
http.createServer((req, res) => { 
    res.write('hola mundo')
    res.end();
 })
.listen(8000);

console.log('Escuchando en el puerto 8000');