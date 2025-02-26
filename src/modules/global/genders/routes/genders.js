const express = require('express');
const router = express.Router();
const GenderController = require('../controllers/genders');

router.get('/', GenderController.getAll);
router.get('/:id', GenderController.getById);
router.post('/', GenderController.create);
router.put('/:id', GenderController.update);
router.delete('/:id', GenderController.delete);


module.exports = router;