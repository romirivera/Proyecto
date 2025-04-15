const User = require('../models/User');

//Obtener todas los usuarios
exports.getAllUsers = async (_, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al encontrar los usuarios' });
  }
};

//Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

//Crear nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({
      message: 'Usuario creada con éxito.',
      data: newUser,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al crear el usuario' });
  }
};

//Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ message: 'Usuario actualizado exitosamente', data: updatedUser });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: 'Error al actualizar el usuario' });
  }
};

//Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
