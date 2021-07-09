//CREATE SERVER WITH EXPRESS
const express = require('express');
const app = express();
const port = 3000;

//MOTOR DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//MIDDLEWARE
app.use(express.static(__dirname + "/public"));


//ROUTES
app.get("/", (req, res) => {
    res.render('index' , {titulo : "mi titutlo dinámicoxd"});
});
app.get('/starter', (req, res) => {
    res.render('started', {titulo : "Instalación de express"});
});
app.get('/servicios' ,(req, res) => {
    res.render('servicios', {titulo : "Mis servicios dinamiscos"});
});
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo : "ERROR 404",
        description : "Información del sitio no encontrada"
    });
});

app.listen(port, () => {
    console.log('Server listening on port', port);
});

//CREATER A SERVER
/* const http = require('http');

const server = http.createServer((req, res) =>  {
    res.end('Hola Mundo');
});

const port = 3000;

server.listen(port, () => {
    console.log('Server listening on port', port);
}); */