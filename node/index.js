const express = require('express');
const app = express();
const sequelize = require('./database/db');
const bodyParser = require('body-parser')
const Product = require('./database/models/Product');

const hostname = '127.0.0.1';
const port = 5000;

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/productos', (req, res) => {
    console.log('req', req.body);
    Product.create(
        req.body
    ).then(product => {
        res.json(product);
    })
});

app.listen(port, () => {

    console.log(`la api esta corriendo por el puerto ${port}`);
    sequelize.sync({ force: true }).then(() => {
        console.log('nos hemos conectado a la base de datos');
    }).catch((error) => {
        console.log('se ha producido un error', error);
    });

})

