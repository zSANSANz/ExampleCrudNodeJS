const express = require('express');
const router = express.Router();
const nilaiTfChildController = require('../controllers/nilai_tf_childs');
router.get('/', nilaiTfChildController.getAll);
router.post('/', nilaiTfChildController.create);
router.get('/:nilaiTfChildId', nilaiTfChildController.getById);
router.put('/:nilaiTfChildsId', nilaiTfChildController.updateById);
router.delete('/:nilaiTfChildId', nilaiTfChildController.deleteById);

module.exports = router;