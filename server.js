const express = require('express');
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 5000;
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Definir Rutas
app.use('/clave', require('./routes/api/archivosclave'));
app.use('/xml', require('./routes/api/archivosxml'));


const root = path.join(__dirname, 'client', 'build') 
app.use(express.static(root)); 
app.get("*", (req, res) => { 
    res.sendFile('index.html', { root }); 
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: https://localhost:${PORT}`)
});

