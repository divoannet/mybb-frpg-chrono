import express from 'express';
import Chronology from '../models/chronology';

const router = express.Router();

router.post('/chronology', async (req, res) => {
  try {
    const item = new Chronology(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/chronology/:id', async (req, res) => {
  try {
    const item = await Chronology.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/chronology', async (req, res) => {
  try {
    const items = Chronology.find({});
    res.send(items);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

router.get('/chronology/:id', async (req, res) => {
  try {
    const item = await Chronology.findById(req.params.id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

export default router;
