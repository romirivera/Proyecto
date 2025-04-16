const express = require('express');
const morgan = require('morgan');
const dbConnection = require('../database/conexion');
const cors = require('cors'); // peticiones desde el frontend
const cabinRoutes = require('../routers/cabinRoutes');
const clientRoutes = require('../routers/clientRoutes');
const paymentRoutes = require('../routers/paymentRoutes');
const reservationRoutes = require('../routers/reservationRoutes');
const hotTubRoutes = require('../routers/hotTubRoutes');
const userRoutes = require('../routers/userRoutes');
const historicalRoutes = require('../routers/historicalRoutes');
const apiKeyAuth = require('../middleware/apiKeyAuth');

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
dbConnection();

//Rutas
app.use('/api/cabins', apiKeyAuth, cabinRoutes);
app.use('/api/clients', apiKeyAuth, clientRoutes);
app.use('/api/payments', apiKeyAuth, paymentRoutes);
app.use('/api/reservations', apiKeyAuth, reservationRoutes);
app.use('/api/hotTubs', apiKeyAuth, hotTubRoutes);
app.use('/api/users', apiKeyAuth, userRoutes);
app.use('/api/historical', apiKeyAuth, historicalRoutes);

module.exports = app;
