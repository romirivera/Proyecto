const Client = require('../models/Client');

//Obtener todas los Clientes
exports.getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Obtener un cliente por ID
exports.getClientById = async (req, res) => {
  try {
    const clients = await Cabin.findById(req.params.id);
    if (!clients) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

//Crear nueva cabaña
exports.createClient = async (req, res) => {
  try {
    const newClient = new Cabin(req.body);
    await newClient.save();
    res.status(201).json({
      message: 'Cliente cread con éxito.',
      data: client,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Actualizar un Cliente
exports.updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedClient) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.status(200).json({ message: 'Cliente actualizado exitosamente', client });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Eliminar un cliente
exports.deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
