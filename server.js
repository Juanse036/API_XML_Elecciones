const express = require('express');
const app = express();
const PORT = process.env.PORT|| 5000;
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


app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`)
});