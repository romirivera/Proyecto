const Reservation = require('../models/Reservation');

//Obtener todas las reservas
exports.getAllReservations = async (_, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(201).json(reservations);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

//Obtener una reserva por ID
exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) return res.status(404).json({ error: 'Reserva no encontrada' });
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

//Crear nueva reserva
exports.createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({
      message: 'Reserva creada con éxito.',
      data: newReservation,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear la reserva' });
  }
};

//Actualizar una reserva
exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ message: 'Reserva actualizada exitosamente', data: updatedReservation });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar la reserva' });
  }
};

//Eliminar una reserva
exports.deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation)
      return res.status(404).json({ message: 'Reserva no encontrada' });
    res.status(200).json({ message: 'Reserva eliminada' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};
