const express = require('express');
const morgan = require('morgan');
const dbConnection = require('../database/conexion');
const cors = require('cors');
const cabinRoutes = require('../routers/cabinRoutes');
const clientRoutes = require('../routers/clientRoutes');
const paymenRoutes = require('../routers/paymentRoutes');
const reservationRoutes = require('../routers/reservationRoutes');
const hotTubRoutes = require('../routers/hotTubRoutes');
const userRoutes = require('../routers/userRoutes');
// desde el frontend

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(cors());
dbConnection();
app.use('/api/cabins', cabinRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/payments', paymenRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/hotTubs', hotTubRoutes);
app.use('/api/users', userRoutes);

module.exports = app;
