require('dotenv').config();
const validApiKey = process.env.API_KEY;

function apiKeyAuth(req, res, next) {
  const key = req.headers['x-api-key'];

  console.log(req.headers);

  if (!key) {
    return res.status(401).json({ error: 'No autorizado. Falta API Key.' });
  }

  if (key !== validApiKey) {
    return res.status(403).json({ error: 'API Key inválida.' });
  }

  next();
}

module.exports = apiKeyAuth;
