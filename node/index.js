const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 5000;


app.get('/productos', (req, res) => {
    res.send([{'nombre': "computador"},{'nombre': "teclado"}]);
});


app.listen(port, () => {
    console.log(`el backend esta corriendo por el puerto ${port}`);
})

