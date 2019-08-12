## Before my project

### Instalación de .json con npm

```
npm init

```

### Web Serve

```
https://nodejs.org/dist/latest-v10.x/docs/api/http.html

```

Para poder escuchar peticiones http se tiene que primero crear el servidor 

```
http.createServe((req, res)=>{

    res.write('Hola Mundo');
    res.end();

})
.listen(8086);

```

### Instalar Express

```
npm install express --save

```

###  Uso de Express para middlewares

Es una instrucción que se va ejecutar sin importar que url el cliente coloque

```
app.use(express.static(__dirname + '/public')); 

```

### Handlerbar

En este caso se utilizara el hbs, que funcione para cumplir las peticiones necesarias del handlebar

```
nom install hbs

```

```
app.set('view engine', 'hbs'); // en el server.js   

```

se crea la carpeta view con el archivo nombre home.hbs y agregamos en el server.js lo siguiente

```
app.get('/', (req, res) => {
//   res.send('Holaaa Mundo')
    res.render('home', {
        nombre: 'Anyeliz',
        year: new Date().getFullYear()
    }) // trae el archivo encontrado en views/home.hbs al inicio

    // res.send(salida)
})
```
### Usar los partials para no duplicar codigo e utilizar por ejemplo el menu el footer (no repeat)


```
https://www.npmjs.com/package/hbs

```

```
var hbs = require('hbs');
 
hbs.registerPartials(__dirname + '/views/partials');

```

Creando dentro de la carpeta views a partials y el archivo que utilizaremos en este caso se crea el archivo narbar.hbs. Dentro de él se agrega todo el navbar que estaba en el home.hbs:


```

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
        
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
    </nav>

```

y agregamos en el home.hbs 

```
  {{> navbar }}

```

este llama al archivo navbar.hbs. De esta manera podemos crear archivos que contengan la información requerida por los contenedores

### Para que actualice los cambios desde nodemon desde el servidor para ciertos archivos 

Desde la terminal donde se ejecute el programa

```

nodemon server -e js,hbs,html,css

```

### Uso del helpers

Es una función que se dispara cuando el template lo requiere

Por ejemplo en el server.js se agregan estos dos herper, una para el año y el otro para capitalizar o colocar en mayusculas las primeras letras y minusculas las demás:

 ```
 hbs.registerHelper('getYear', ()=>{
    return new Date().getFullYear()
});
hbs.registerHelper('capitalizar', (texto)=>{
    let palabras= texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase()+ palabra.slice(1).toLowerCase()
    });
    return palabras.join(' ');
});

 ```

 Entonces en los archivos que correspondan se agrega lo siguiente:

 ```
 <div class="jumbotron">
        <h1 class="display-4"> Hola, {{capitalizar 'anyeLiz Rico'}}</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>


 ```

 ahora si queremos es llevar un nombre de una variable, colocamos la que trae el home.hbs

 ```
....

        <h1 class="display-4"> Hola, {{capitalizar nombre}}</h1>
....
 ```

 ### Publicar en HEROKU

- Registrarse En heroku y se trabajará con Nodejs
- Create a new app (nombre,Select region)
- Deployment (Heroku CLI)
- En Deploy using Heroku Git (damos click a download and install herokuCLI) 
- Modificar el archivo server en en los puertos
- Para que Heroku conozca que leer y como en el archivo package.json se le agrega start: node server.js 

```
...
"start": "node server.js",
...

```
en la console se ejecuta con:

```
node server.js

```

ahora se agrega en el .json el nodemon:
```
"nodemon": "nodemon server.js",

```
ahora en la console se ejecuta con:
```
npm run nodemon

```
- Subir todo a git para iniciar con heroku git
    git init
    git status
- Iniciar en la terminal con:

```
heroku login

```

Luego:

```
heroku git:remote -a anyeliz-nodejs-webserve-njsexp

```
Por ultimo subimos con push_

```
git push heroku master

```
Desde la terminal para abrir la pagina que acabamos de subir:

```heroku open```

### Reconstruir los archivos alojados en heroku

Desde la pagina en deploy se encuentra el código para clonar el archivo o los documentos alojados en heroku 






