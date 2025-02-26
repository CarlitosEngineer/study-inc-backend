const Lang = require('../models/languages');

//get all data
exports.getAll = async(req,res )=> {
try{
  const languages = await Lang.findAll();
  res.json(languages);
}catch (error){
  res.status(500).json({error: 'Error at fetching Data'});
}
};

exports.getById = async (req,res)=>{
try{
 const languages = await Lang.findByPk(req.params.id);
 if (!languages) return res.status(404).json({error:'Data not found'});
res.json(languages);
}catch (error) {
 res.status(500).json({error:'Error at fetching Data'});
}
};

exports.create = async (req,res)=>{
try{
    const {name,iso639_1,iso639_2} = req.body;
    const newLang = await Lang.create({name,iso639_1,iso639_2});
    res.status(201).json(newLang)
    } catch(error){
    res.status(400).json({error : 'Error at adding new Lang', details:error.messsage});
    }
};


exports.update = async (req,res)=>{
try{
    const {name,iso639_1,iso639_2}= req.body;
    const languages = await Lang.findByPk(req.params.id);
    if (!languages) return res.status(404).json({ error: 'Lang not found' });
    await languages.update({name,iso639_1,iso639_2});
    res.json(languages);
}catch (error){
    res.status(400).json({error:'Error at updating Lang'});
}

};

exports.delete = async (req, res) => {
try {
     const languages = await Lang.findByPk(req.params.id);
     if (!languages) return res.status(404).json({ error: 'Lang not found ' });

      await languages.destroy();
      res.json({ message: 'Language dropped succesfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error at dropping Lang' });
    }
};