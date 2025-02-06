const express = require("express");
const router = express.Router();

// Datos de ejemplo (simulando una base de datos)
let users = [
  { id: 1, name: "Carlos", email: "carlos@example.com" },
  { id: 2, name: "Ana", email: "ana@example.com" }
];

// Obtener todos los usuarios
router.get("/", (req, res) => {
  res.json(users);
});

// Obtener un usuario por ID
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
  res.json(user);
});

// Crear un nuevo usuario
router.post("/", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Nombre y correo son requeridos" });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Actualizar un usuario
router.put("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// Eliminar un usuario
router.delete("/:id", (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.json({ message: "Usuario eliminado" });
});

module.exports = router;
