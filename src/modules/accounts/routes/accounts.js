const express = require('express');
const router = express.Router();
const Accountcontroller = require ('../controllers/accounts');

router.get('/',Accountcontroller.getAll);
router.get('/:id', Accountcontroller.getById);
router.get('/login/:id',Accountcontroller.getLogin);
router.post('/',Accountcontroller.create);
//router.put('/:id',Accountcontroller.update);
router.patch('/:id',Accountcontroller.updatePassword);
router.delete('/:id',Accountcontroller.delete);

module.exports = router;