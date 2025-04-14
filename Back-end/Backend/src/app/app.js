const express = require('express'); /// requerimos express
const morgan = require('morgan'); // requerimos morgan
const dbConnection = require('../database/conexion');
const cors = require('cors');
// desde el frontend

const app = express();

// Middlewares
app.use(morgan('dev')); // función middleware de terceros
app.use(express.json()); // Permite recibir JSON

app.use(cors());
dbConnection();

module.exports = app;
