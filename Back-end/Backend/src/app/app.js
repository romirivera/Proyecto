const express = require('express');
const morgan = require('morgan');
const dbConnection = require('../database/conexion');
const cors = require('cors');
const cabinRoutes = require('../routers/cabinRoutes');
// desde el frontend

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
dbConnection();
app.use('/api/cabins', cabinRoutes);
module.exports = app;
