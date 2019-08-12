// 1.0 Instancias
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); // se coloca cuando mudadmos el helpers a esa carpeta
const port = process.env.PORT || 3000

//Directorios necesarios 
app.use(express.static(__dirname + '/public')); //express
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); //Express hbs


// // Helpers (se mudaron a la carpeta helpers)
// hbs.registerHelper('getYear', ()=>{
//     return new Date().getFullYear()
// });
// hbs.registerHelper('capitalizar', (texto)=>{
//     let palabras= texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase()+ palabra.slice(1).toLowerCase()
//     });
//     return palabras.join(' ');
// });

///////////////////////////////
app.get('/', (req, res) => {
//   res.send('Holaaa Mundo')
    res.render('home', {
        nombre: 'Anyeliz',

       // year: new Date().getFullYear()
    }) // trae el archivo encontrado en views/home.hbs al inicio

    // res.send(salida)
})
app.get('/about', (req, res) => {
    //   res.send('Holaaa Mundo')
        res.render('about',{
            year: new Date().getFullYear()
        }) // trae el archivo encontrado en views/about.hbs
    
        // res.send(salida)
    })

app.get('/data', (req, res) => {
     res.send('Holaaa data')
   
   
    })

 
// app.listen(3000, ()=>{
//     console.log('Escuchando peticiones del puerto 3000')
// })
app.listen(port, ()=>{
    console.log(`Escuchando peticiones del puerto ${ port }`)
})