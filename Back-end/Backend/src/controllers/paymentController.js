const Payment = require('../models/Payment');

//Obtener todos los pagos
exports.getAllPayments = async (_, res) => {
  try {
    const payments = await Payment.find()
      .populate('client', 'name')
      .populate('reservation');
    console.log(payments);
    res.status(200).json(payments);
  } catch (error) {
    console.error(error.message);
    res.estatus(500).json({ error: 'Error al obtener los pagos' });
  }
};

//Obtener un pago por ID
exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) return res.status(404).json({ error: 'Pago no encontrado' });
    res.status(200).json(payment);
  } catch (error) {
    console.error(error.message);
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
      data: newPayment,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear el pago' });
  }
};

//Actualizar un pago
exports.updatePayment = async (req, res) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: 'Pago actualizado exitosamente', data: updatedPayment });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar el pago' });
  }
};

//Eliminar un pago
exports.deletePayment = async (req, res) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment) return res.status(404).json({ message: 'Pago no encontrado' });
    res.status(200).json({ message: 'Pago eliminado' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar el pago' });
  }
};
