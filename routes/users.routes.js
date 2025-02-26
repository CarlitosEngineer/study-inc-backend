const express = require("express");
const router = express.Router();

// Ruta para obtener todos los usuarios
router.route('/api/users').get((req, res) => {
  // link for test: http://localhost:3000/api/v1
  res.send(`<h1>estÃ¡s en ${req.baseUrl}</h1>`)
})


// Ruta para obtener un usuario específico por ID
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Información del usuario con ID ${userId}` });
});

module.exports = router;
