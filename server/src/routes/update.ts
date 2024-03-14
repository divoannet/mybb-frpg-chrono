import express from 'express';
import Chronology from '../models/chronology';

const router = express.Router();

router.get('/chronology/update/:id', async (req, res) => {
  try {
    // run updater
  }
  catch (e) {
    res.status(500).send(e);
  }
});

export default router;
