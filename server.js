const express = require('express');
const app = express();
require('./hbs/helpers');

const port = process.env.PORT || 3000;

var hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    //res.send('Hola Mundo!!!')

    res.render('home.hbs', {
        nombre: 'Maximino cornejo tenorio comt'
    });
});

app.get('/about', function(req, res) {
    //res.send('Hola Mundo!!!')

    res.render('about.hbs');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});