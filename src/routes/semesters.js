const express = require('express');
const router = express.Router();
const semesterController = require('../controllers/semesters');
router.get('/', semesterController.getAll);
router.post('/', semesterController.create);
router.get('/:semesterId', semesterController.getById);
router.put('/:semesterId', semesterController.updateById);
router.delete('/:semesterId', semesterController.deleteById);

module.exports = router;