const express = require('express');
const router = express.Router();
const cabinController = require('../controllers/cabinConntroller');

router.get('/', cabinController.getAllCabins);
router.get('/:id', cabinController.getCabinById);
router.post('/', cabinController.createCabin);
router.put('/:id', cabinController.updateCabin);
router.delete('/:id', cabinController.deleteCabin);

module.exports = router;
