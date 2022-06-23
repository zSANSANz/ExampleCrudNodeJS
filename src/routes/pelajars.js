const express = require('express');
const router = express.Router();
const pelajarController = require('../controllers/pelajars');
router.get('/', pelajarController.getAll);
router.post('/', pelajarController.create);                
router.get('/:pelajarId', pelajarController.getById);
router.put('/:pelajarId', pelajarController.updateById);
router.delete('/:pelajarId', pelajarController.deleteById);

module.exports = router;