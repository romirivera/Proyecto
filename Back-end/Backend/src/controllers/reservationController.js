const Reservation = require('../models/Reservation');

exports.getAllReservations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalItems = await Reservation.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const reservations = await Reservation.find()
      .skip(skip)
      .limit(limit)
      .populate('client')
      .populate('cabin');

    res.status(200).json({
      reservations,
      pagination: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems,
        totalPages,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

exports.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
      .populate('client')
      .populate('cabin');
    if (!reservation) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

exports.createReservation = async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).json({
      message: 'Reserva creada con éxito',
      data: newReservation,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear la reserva' });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: 'Reserva actualizada exitosamente',
      data: updatedReservation,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar la reserva' });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!deletedReservation) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    res.status(200).json({ message: 'Reserva eliminada' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};
