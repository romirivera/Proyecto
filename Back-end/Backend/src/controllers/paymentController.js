const Payment = require('../models/Payment');

//Obtener todos los pagos
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.estatus(500).json({ error: error.message });
  }
};

//Obtener un pago por ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ error: 'Pago no encontrado' });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el pago' });
  }
};

//Crear nuevo pago
exports.createPayment = async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    await newPayment.save();
    res.status(201).json({
      message: 'Pago creado con éxito.',
      data: Payment,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Actualizar una cabaña
exports.updatePayment = async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPayment) return res.status(404).json({ message: 'Pago no encontrado' });
    res.status(200).json({ message: 'Pago actualizado exitosamente', payment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Eliminar un pago
exports.deletePayment = async (req, res) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment) return res.status(404).json({ message: 'Pago no encontrado' });
    res.status(200).json({ message: 'Pago eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
