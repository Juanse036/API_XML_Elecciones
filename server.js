const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


//Definir Rutas
app.use('/clave', require('./routes/api/archivosclave'));
app.use('/xml', require('./routes/api/archivosxml'));


app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.listen(port, () => {
  console.log(`Servidor corriendo en: http://localhost:${port}`)
});