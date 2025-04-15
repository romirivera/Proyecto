const express = require('express');
const router = express.Router();
const historicalController = require('../controllers/historicalController');

router.get('/', historicalController.getAllHistoricalReservations);
router.get('/:id', historicalController.getHistoricalReservationById);
router.get('/', historicalController.getAllHistoricalPayments);
router.get('/:id', historicalController.getHistoricalPaymentById);

module.exports = router;
