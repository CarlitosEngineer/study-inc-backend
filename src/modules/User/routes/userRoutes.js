const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/users', async (req, res) => {
  try {
    const nuevoUsuario = new User(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
