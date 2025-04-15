const express = require('express');
const router = express.Router();
const hotTubController = require('../controllers/hotTubController');

router.get('/', hotTubController.getAllHotTubs);
router.get('/:id', hotTubController.getHotTubById);
router.post('/', hotTubController.createHotTub);
router.put('/:id', hotTubController.updateHotTub);
router.delete('/:id', hotTubController.deleteHotTub);

module.exports = router;
