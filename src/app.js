const express = require('express');
const path = require('path');

const app = express();
const puerto = 3000;

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.send('¡Hola, esta es la ruta raíz!');
});

app.get('/otra-ruta', (req, res) => {
  res.send('¡Hola, esta es otra ruta!');
});

// Ruta para enviar un archivo
app.get('/archivo', (req, res) => {
  const filePath = path.join(__dirname,'index.html');
  res.sendFile(filePath);
});

app.listen(puerto, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${puerto}`);
});
