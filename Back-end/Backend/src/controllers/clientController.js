const Client = require('../models/Client');

//Obtener todas los Clientes
exports.getAllClients = async (_, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener los clientes' });
  }
};
//Obtener un cliente por ID
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.status(200).json(client);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener el cliente' });
  }
};

//Crear nuevo cliente
exports.createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json({
      message: 'Cliente creado con éxito.',
      data: newClient,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear el cliente' });
  }
};

//Actualizar un Cliente
exports.updateClient = async (req, res) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: 'Cliente actualizado exitosamente', data: updateClient });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar el cliente' });
  }
};

//Eliminar un cliente
exports.deleteClient = async (req, res) => {
  try {
    const deleteClient = await Client.findByIdAndDelete(req.params.id);
    if (!deleteClient) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar el cliente' });
  }
};
