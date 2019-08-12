const http= require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'fernado',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end()

})
.listen(8086);

console.log('Escuchando el puerto 8086')