const express = require('express');
const router = express.Router();
const pelajaranController = require('../controllers/pelajarans');
router.get('/', pelajaranController.getAll);
router.post('/', pelajaranController.create);                
router.get('/:pelajaranId', pelajaranController.getById);
router.put('/:pelajaranId', pelajaranController.updateById);
router.delete('/:pelajaranId', pelajaranController.deleteById);

module.exports = router;