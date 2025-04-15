require('dotenv').config();
const app = require('./src/app/app.js');
require('./src/cronJobs/historicalTasks');
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
