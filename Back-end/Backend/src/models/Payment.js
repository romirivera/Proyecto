const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    reservation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reservation',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      default: 'CLP',
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['Crédito', 'Débito'],
    },
    paymentStatus: {
      type: String,
      enum: ['Pendiente', 'Completado', 'Fallido'],
      default: 'Pendiente',
    },
  },
  { timestamps: true }
);

// Verifica si el modelo ya existe y usa ese modelo, de lo contrario lo crea.
const Payment = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);

module.exports = Payment;
