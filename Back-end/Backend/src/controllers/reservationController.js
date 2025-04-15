const Reservation = require('../models/Reservation');

//Obtener todas las reservas
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Obtener una reserva por ID
exports.getReservationById = async (req, res) => {
  try {
    const reservations = await Reservation.findById(req.params.id);
    if (!reservations) return res.status(404).json({ error: 'Reserva no encontrada' });
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

//Crear nueva cabaña
exports.createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({
      message: 'Reserva creada con éxito.',
      data: reservation,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Actualizar una cabaña
exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedReservation)
      return res.status(404).json({ message: 'Reserva no encontrada' });
    res.status(200).json({ message: 'Reserva actualizada exitosamente', reservation });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Eliminar una cabaña
exports.deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation)
      return res.status(404).json({ message: 'Reserva no encontrada' });
    res.status(200).json({ message: 'Reserva eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
