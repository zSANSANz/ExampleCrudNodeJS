const express = require('express');
const router = express.Router();
const nilaiHeadController = require('../controllers/nilai_heads');
router.get('/', nilaiHeadController.getAll);
router.post('/', nilaiHeadController.create);
router.get('/:nilaiHeadId', nilaiHeadController.getById);
router.put('/:nilaiHeadId', nilaiHeadController.updateById);
router.delete('/:nilaiHeadId', nilaiHeadController.deleteById);

module.exports = router;