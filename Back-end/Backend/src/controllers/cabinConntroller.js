const Cabin = require('../models/Cabin');

//Obtener todas las cabañas
exports.getAllCabins = async (_, res) => {
  try {
    const cabins = await Cabin.find();
    res.status(200).json(cabins);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al encontrar las cabañas' });
  }
};

//Obtener una cabaña por ID
exports.getCabinById = async (req, res) => {
  try {
    const cabin = await Cabin.findById(req.params.id);
    if (!cabin) return res.status(404).json({ error: 'Cabaña no encontrada' });
    res.status(200).json(cabin);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener la cabaña' });
  }
};

//Crear nueva cabaña
exports.createCabin = async (req, res) => {
  try {
    const newCabin = new Cabin(req.body);
    await newCabin.save();
    res.status(201).json({
      message: 'Cabañaa creada con éxito.',
      data: newCabin,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear la cabaña' });
  }
};

//Actualizar una cabaña
exports.updateCabin = async (req, res) => {
  try {
    const updatedCabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //si no lo encuentra que lo cree con los datos del req.body
    });
    res
      .status(200)
      .json({ message: 'Cabaña actualizada exitosamente', data: updatedCabin });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar la cabaña' });
  }
};

//Eliminar una cabaña
exports.deleteCabin = async (req, res) => {
  try {
    const deletedCabin = await Cabin.findByIdAndDelete(req.params.id);
    if (!deletedCabin) return res.status(404).json({ message: 'Cabaña no encontrada' });
    res.status(200).json({ message: 'Cabaña eliminada' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar la cabaña' });
  }
};
