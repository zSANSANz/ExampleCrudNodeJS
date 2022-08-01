const express = require('express');
const router = express.Router();
const nilaiImtihanChildController = require('../controllers/nilai_imtihan_childs');
router.get('/', nilaiImtihanChildController.getAll);
// router.post('/', nilaiImtihanChildController.create);
// router.get('/:nilaiImtihanChildId', nilaiImtihanChildController.getById);
// router.put('/:nilaiImtihanChildId', nilaiImtihanChildController.updateById);
// router.delete('/:nilaiImtihanChildId', nilaiImtihanChildController.deleteById);

module.exports = router;