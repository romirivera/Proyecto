const HistoricalReservation = require('../models/HistoricalReservation');
const HistoricalPayment = require('../models/HistoricalPayments');

//Obtener todas las reservas historicas
exports.getAllHistoricalReservations = async (_, res) => {
  try {
    const historicalReservations = await HistoricalReservation.find();
    res.status(200).json(historicalReservations);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al encontrar las reservas historicas' });
  }
};

//Obtener una reserva historica por ID
exports.getHistoricalReservationById = async (req, res) => {
  try {
    const historicalReservation = await HistoricalReservation.findById(req.params.id);
    if (!historicalReservation)
      return res.status(404).json({ error: 'Reserva historica no encontrada' });
    res.status(200).json(historicalReservation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener la reserva historica' });
  }
};

//Obtener todas las reservas historicas
exports.getAllHistoricalPayments = async (_, res) => {
  try {
    const historicalPayments = await HistoricalPayment.find().populate({
      path: 'originalPayment',
      populate: {
        path: 'reservation',
        model: 'Reservation',
      },
    });
    res.status(200).json(historicalPayments);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al encontrar los pagos historicos' });
  }
};

//Obtener una reserva historica por ID
exports.getHistoricalPaymentById = async (req, res) => {
  try {
    const historicalPayment = await HistoricalPayment.findById(req.params.id);
    if (!historicalPayment)
      return res.status(404).json({ error: 'Pago historico no encontrado' });
    res.status(200).json(historicalPayment);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener el pago historico' });
  }
};
