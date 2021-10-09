const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Product = require('./database/models/Product');

// const mongoose = require('mongoose');
// const url = 'mongodb://localhost/store'
// mongoose.connect(url, {

// }).then(() => console.log('conexion ok'))
//     .catch((e) => console.log(e))



const hostname = '127.0.0.1';
const port = 5000;

//middleWare
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', require('./routes/productos'))

app.listen(port, () => {

    try {
        console.log(`la api esta corriendo por el puerto ${port}`);
        sequelize.sync({ force: false }).then(() => {
            console.log('nos hemos conectado a la base de datos');
        });
    } catch (error) {
        console.log('se ha producido un error', error);
    }



})

