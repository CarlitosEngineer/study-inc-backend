const Genders = require("../models/genders");

exports.getAll = async (req, res )=> {
    try{
        const genders = await Genders.findAll();
        res.json(genders);
    }catch{
        res.status(500).json({error: 'Error fetching data'})
    }
};

exports.getById = async (req, res) =>{
try{
    const genders = await Genders.findByPk(req.params.id);
    if (!genders) return res.status(404).json({error:'data not found'}) ;
    res.json(genders);
}
catch (error){
    res.status(500).json({error:'error data not found '})
}
};

exports.create = async (req, res) => {
    try {
      const { id, name } = req.body;
      const newGender = await Genders.create({ id, name });
      res.status(201).json(newGender);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el genero', details: error.message });
    }
  };


  exports.update = async (req, res) => {
    try {
      const { name } = req.body;
      const genders = await Genders.findByPk(req.params.id);
      if (!genders) return res.status(404).json({ error: 'Data not found' });
  
      await genders.update({ name });
      res.json(genders);
    } catch (error) {
      res.status(400).json({ error: 'Error at updating genders', details: error.message });
    }
  };
  
  exports.delete = async (req, res) => {
    try {
      const genders = await Genders.findByPk(req.params.id);
      if (!genders) return res.status(404).json({ error: 'País no encontrado' });
  
      await genders.destroy();
      res.json({ message: 'País eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el país' });
    }
  };
  