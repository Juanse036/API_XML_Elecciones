const express = require('express');
const app = express();
const port = process.env.NODE_ENV|| 5000;
const path = require('path')


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Definir Rutas
app.use('/clave', require('./routes/api/archivosclave'));
app.use('/xml', require('./routes/api/archivosxml'));

// Serve static assets in production
app.use(express.static(path.resolve(__dirname, "./client/build")));


app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`)
});