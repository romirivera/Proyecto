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
