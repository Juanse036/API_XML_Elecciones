const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
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
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}


app.listen(PORT, () => {
  console.log(`Servidor corriendo en: https://localhost:${PORT}`)
});