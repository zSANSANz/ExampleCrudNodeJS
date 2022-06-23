const express = require('express');
const router = express.Router();
const mudirController = require('../controllers/mudirs');
router.get('/', mudirController.getAll);
router.post('/', mudirController.create);
router.get('/:mudirId', mudirController.getById);
router.put('/:mudirId', mudirController.updateById);
router.delete('/:mudirId', mudirController.deleteById);

module.exports = router;