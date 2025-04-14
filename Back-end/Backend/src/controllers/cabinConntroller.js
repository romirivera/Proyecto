const Cabin = require('../models/Cabin');

//Obtener todas las cabañas
exports.getAllCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();
    res.json(cabins);
  } catch (error) {
    res.estatus(500).json({ error: error.message });
  }
};

//Obtener una cabaña por ID
exports.getCabinById = async (req, res) => {
  try {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) return res.status(404).json({ error: 'Cabaña no encontrada' });
    res.status(200).json(cabin);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la cabaña' });
  }
};

//Crear nueva cabaña
exports.createCabin = async (req, res) => {
  try {
    const newCabin = new Cabin(req.body);
    await newCabin.save();
    res.status(201).json({
      message: 'Cabina creada con éxito.',
      data: cabin,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Actualizar una cabaña
exports.updateCabin = async (req, res) => {
  try {
    const updatedCabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCabin) return res.status(404).json({ message: 'Cabina no encontrada' });
    res.status(200).json({ message: 'Cabina actualizada exitosamente', cabin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Eliminar una cabaña
exports.deleteCabin = async (req, res) => {
  try {
    const deletedCabin = await Cabin.findByIdAndDelete(req.params.id);
    if (!deletedCabin) return res.status(404).json({ message: 'Cabina no encontrada' });
    res.status(200).json({ message: 'Cabina eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
