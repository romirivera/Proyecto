const express = require('express'); /// requerimos express
const morgan = require('morgan'); // requerimos morgan
const cors = require('cors'); // Para permitir peticiones
// desde el frontend
const port = 3000;

const app = express();

// Middlewares
app.use(morgan('dev')); // función middleware de terceros
app.use(express.json()); // Permite recibir JSON

app.use(cors());

app.listen(PORT, () => {
  console.log(`servel listening on port http://localhost:${port}`);
});
module.exports = app;
