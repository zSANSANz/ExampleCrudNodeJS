const express = require('express');
const router = express.Router();
const barangController = require('../controllers/barangs');
router.get('/', barangController.getAll);
router.post('/', barangController.create);
router.get('/:barangId', barangController.getById);
router.put('/:barangId', barangController.updateById);
router.delete('/:barangId', barangController.deleteById);

module.exports = router;