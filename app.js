const express = require('express'); //Requiero express para mi proyecto
const app = express(); //levanto express y ya puedo utilizarlo
const mainRoutes = require ('./src/routes/mainRoutes.js'); //creo la varible para llamarla desde la carpeta
const shopRoutes = require ('./src/routes/shopRoutes.js');
const adminRoutes = require ('./src/routes/adminRoutes.js');
const authRouters = require ('./src/routes/authRoutes.js');


app.use (express.static('public')); //creo la carpeta estática public con mis archivos
app.use('/', mainRoutes); //enlazamos el archivo mainRoutes al entry point
app.use ('/shop', shopRoutes);
app.use ('/admin', adminRoutes);
app.use('/auth', authRouters);



//app.get ('/ping', (req, res) => res.send('pong')); creo mi primera ruta para ver si funciona

app.listen(4000, () => console.log("Servidor corriendo en http://localhost:4000")); // escucho a traves del puerto 4000 y devuelvo mensaje
