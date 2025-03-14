const cron = require('node-cron');
const moveOldReservations = require('../services/moveOldReservations');
const moveOldPayments = require('../services/moveOldPayments');

// Run every day at 00:00
cron.schedule('0 0 * * *', async () => {
  console.log('Running historical tasks');
  await moveOldReservations();
  await moveOldPayments();
  console.log('Finished historical tasks');
});

console.log('Historical tasks scheduled');
