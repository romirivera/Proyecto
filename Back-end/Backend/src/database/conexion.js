require('dotenv').config();
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    console.log('URLL de MongoDB: ', process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log('conexión a la base de datos exitosa ');
  } catch (error) {
    console.log('Error al conectar: ', error.message);
    process.exit(1);
  }
};
module.exports = dbConnection;
