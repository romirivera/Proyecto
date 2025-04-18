const express = require('express');
const router = express.Router();
const historicalController = require('../controllers/historicalController');

// Rutas para reservas históricas
router.get('/historicalreservations', historicalController.getAllHistoricalReservations);
router.get(
  '/historicalreservations/:id',
  historicalController.getHistoricalReservationById
);

// Rutas para pagos históricos
router.get('/historicalpayments', historicalController.getAllHistoricalPayments);
router.get('/historicalpayments/:id', historicalController.getHistoricalPaymentById);

module.exports = router;
