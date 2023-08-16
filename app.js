const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  })
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando',
    titulo: 'Curso de Node'
  })
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404/index.html')
  });

app.listen(port)
console.log(`Corriendo en el puerto ${port}`);