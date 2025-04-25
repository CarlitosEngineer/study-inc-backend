// src/modules/User/routes/userRoutes.js
import express from 'express';
import User from './Countries-Models.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
