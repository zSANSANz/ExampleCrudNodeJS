const express = require('express');
const router = express.Router();
const presensiChildController = require('../controllers/presensi_childs');
router.get('/', presensiChildController.getAll);
router.post('/', presensiChildController.create);                
router.get('/:presensiChildId', presensiChildController.getById);
router.put('/:presensiChildId', presensiChildController.updateById);
router.delete('/:presensiChildId', presensiChildController.deleteById);

module.exports = router;