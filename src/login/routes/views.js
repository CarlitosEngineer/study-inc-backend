/*const express = require('express');
const passport = require('passport');
const router = express.Router();
const Authorization = require('../authorization/authorization');

// Llamar a `beginpassport` antes de usar `passport.authenticate`
Authorization.beginpassport();

router.get('/form', passport.authenticate('local', { 
    successRedirect: '/dashboard', 
    failureRedirect: '/login', 
    failureFlash: true 
}));

module.exports = router;
*/