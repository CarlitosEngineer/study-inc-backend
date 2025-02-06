// Importar módulos
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

// Configuración del servidor
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Permitir peticiones de otros dominios
app.use(morgan("dev")); // Registrar peticiones en la consola
app.use(express.json()); // Habilitar el uso de JSON en las peticiones

// Rutas básicas
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a mi API REST con Express!" });
});

// Importar rutas de la API
const usersRoutes = require("./routes/users.routes");
app.use("/api/users", usersRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
