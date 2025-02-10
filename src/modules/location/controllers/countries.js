const Country = require('../models/countries');

// Obtener todos los países
exports.getAll = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los países' });
  }
};

// Obtener un país por ID
exports.getById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ error: 'País no encontrado' });
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el país' });
  }
};

// Crear un nuevo país
exports.create = async (req, res) => {
  try {
    const { name, iso3166_2, iso3166_3, num_code, phone_code } = req.body;
    const newCountry = await Country.create({ name, iso3166_2, iso3166_3, num_code, phone_code });
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el país', details: error.message });
  }
};

// Actualizar un país por ID
exports.update = async (req, res) => {
  try {
    const { name, iso3166_2, iso3166_3, num_code, phone_code } = req.body;
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ error: 'País no encontrado' });

    await country.update({ name, iso3166_2, iso3166_3, num_code, phone_code });
    res.json(country);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar el país', details: error.message });
  }
};

// Eliminar un país por ID
exports.delete = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).json({ error: 'País no encontrado' });

    await country.destroy();
    res.json({ message: 'País eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el país' });
  }
};
