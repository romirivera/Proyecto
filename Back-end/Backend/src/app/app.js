const express = require('express'); /// requerimos express
const morgan = require('morgan'); // requerimos morgan
const dbConnection = require('../database/conexion');
// desde el frontend

const app = express();

// Middlewares
app.use(morgan('dev')); // función middleware de terceros
app.use(express.json()); // Permite recibir JSON

app.use(cors());
dbConnection();

app.listen(PORT, () => {
  console.log(`servel listening on port http://localhost:${port}`);
});
module.exports = app;
