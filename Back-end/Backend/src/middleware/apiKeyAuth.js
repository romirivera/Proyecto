require("dotenv").config();
const validApiKey = process.env.API_KEY;

function apiKeyAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ error: 'No autorizado. Falta API Key.' });
  }


  if (key !== validApiKey) {
    return res.status(403).json({ error: 'API Key inválida.' });
  }

  next();
};

module.exports = apiKeyAuth;
