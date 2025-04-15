const HotTub = require('../models/HotTub');

//Obtener las tinajas
exports.getAllHotTubs = async (_, res) => {
  try {
    const HotTubs = await HotTub.find();
    res.status(200).json(HotTubs);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al encontrar las tinajas' });
  }
};
//Obtener una tinaja por ID
exports.getHotTubById = async (req, res) => {
  try {
    const HotTub = await HotTub.findById(req.params.id);
    if (!HotTub) return res.status(404).json({ error: 'Tinaja no encontrada' });
    res.status(200).json(HotTub);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener la tinaja' });
  }
};

//Crear nueva tinaja
exports.createHotTub = async (req, res) => {
  try {
    const newHotTub = new HotTub(req.body);
    await newHotTub.save();
    res.status(201).json({
      message: 'Tinaja creada con éxito.',
      data: newHotTub,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear la tinaja' });
  }
};
//Actualizar una tinaja
exports.updateHotTub = async (req, res) => {
  try {
    const updatedHotTub = await HotTub.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //si no lo encuentra que lo cree con los datos del req.body
    });
    res
      .status(200)
      .json({ message: 'Tinaja actualizada exitosamente', data: updatedHotTub });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar la tinaja' });
  }
};
//Eliminar una tinaja
exports.deleteHotTub = async (req, res) => {
  try {
    const deletedHotTub = await HotTub.findByIdAndDelete(req.params.id);
    if (!deletedHotTub) return res.status(404).json({ message: 'Tinaja no encontrada' });
    res.status(200).json({ message: 'Tinaja eliminada' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar la tinaja' });
  }
};
