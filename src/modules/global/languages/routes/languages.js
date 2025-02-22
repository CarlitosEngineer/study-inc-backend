const express = require('express');
const router = express.Router();
const LangController = require('../controllers/languages');

router.get('/', LangController.getAll);
router.get('/:id', LangController.getById);
router.post('/', LangController.create);
router.put('/:id', LangController.update);
router.delete('/:id', LangController.delete);

module.exports = router;