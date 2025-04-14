const app = require('./src/app/app.js'); // importamos app
require('./src/cronJobs/historicalTasks');
const port = 3000; // declaramos variable port

app.listen(port, () => {
  console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
}); //(listen)=escuchar //traemos variable port
