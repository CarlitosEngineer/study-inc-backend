const express = require('express');
const router = express.Router();
const CountryController = require('../controllers/countries');

router.get('/', CountryController.getAll);
router.get('/:id', CountryController.getById);
router.post('/', CountryController.create);
router.put('/:id', CountryController.update);
router.delete('/:id', CountryController.delete);

module.exports = router;
