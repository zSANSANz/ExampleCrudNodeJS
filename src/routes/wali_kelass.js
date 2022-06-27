const express = require('express');
const router = express.Router();
const waliKelasController = require('../controllers/wali_kelass');
router.get('/', waliKelasController.getAll);
router.post('/', waliKelasController.create);
router.get('/:waliKelasId', waliKelasController.getById);
router.put('/:waliKelasId', waliKelasController.updateById);
router.delete('/:waliKelasId', waliKelasController.deleteById);

module.exports = router;