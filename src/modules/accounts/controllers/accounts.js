 const Account = require('../models/accounts');
 const bcryptjs = require('bcryptjs');


 exports.getAll = async(req,res )=> {
    try{
      const Accountuages = await Account.findAll();
      res.json(Accountuages);
    }catch (error){
      res.status(500).json({error: 'Error at fetching Data'});
    }
    };
    
    exports.getById = async (req,res)=>{
    try{
     const Accounts = await Account.findByPk(req.params.id);
     if (!Accounts) return res.status(404).json({error:'Data not found'});
    res.json(Accounts);
    }catch (error) {
     res.status(500).json({error:'Error at fetching Data'});
    }
    
    };

  exports.getLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    let busqueda = await Account.findOne({
      where: { email: email },
      attributes: ['id', 'password'],
    });

    if (busqueda === null) {
      return res.status(401).send({ message: 'Error en las credenciales' }); // Use 401 for unauthorized
    }

    if (busqueda !== null) {
      let autenticado = await bcryptjs.compare(password, busqueda.password);
      if (autenticado !== true) {
        return res.status(401).send({ message: 'Error en las credenciales' }); // Use 401 for unauthorized
      } else {
        return res.status(200).send({
          message: 'Inicio de Sesión Autorizado',redirect: "/"
        });
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).send({ message: 'Error interno del servidor' }); // Handle server errors
  }
};
        

    

exports.create = async (req, res) => {
  try {
    let { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send({ message: 'Data Incomplete' }); // Use 400 for bad request
    }  

    let salt = await bcryptjs.genSalt(5); // Corrección aquí
    let passHash = await bcryptjs.hash(password, salt);

    await Account.create({ username, email, password: passHash });

    console.log(passHash);

    res.status(201).send({ // Use 201 for created
      message: 'User created successfully!', redirect: "/"
    });

  } catch (error) {
    console.error('Error creating user:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({ message: 'Email or username already in use.' }); // 409 conflict.
    }
    return res.status(500).send({ message: 'Internal server error' }); // Handle server errors
  }
};

    
    
    exports.update = async (req, res) => {
      try {
        const { username, email } = req.body;
        const Accounts = await Account.findByPk(req.params.id);
    
        if (!Accounts) {
          return res.status(404).json({ error: 'Account not found' });
        }
    
        let updateData = { username, email };
  
  
        await Accounts.update(updateData);
        res.json(Accounts);
      } catch (error) {
        console.error("Error updating account:", error);
        res.status(400).json({ error: 'Error updating Account' });
      }
    };


exports.updatePassword = async (req, res) => {
  try {
    const { password } = req.body;
    const account = await Account.findByPk(req.params.id);

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Comparar la nueva contraseña con la almacenada
    const isSamePassword = await bcryptjs.compare(password, account.password);

    if (isSamePassword) {
      return res.json({ message: 'Password remains the same, no update needed' });
    }

    // Hashear y actualizar solo si es diferente
    const passHash = await bcryptjs.hash(password, 8);
    await account.update({ password: passHash });

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
    

    exports.delete = async (req, res) => {
    try {
         const Accounts = await Account.findByPk(req.params.id);
         if (!Accounts) return res.status(404).json({ error: 'Account not found ' });
    
          await Accounts.destroy();
          res.json({ message: 'Account dropped succesfully' });
        } catch (error) {
          res.status(500).json({ error: 'Error at dropping Account' });
        }
    };


