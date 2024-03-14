import express from 'express';
import Board from '../models/boardSettings';

const router = express.Router();

router.post('/board', async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.status(201).send(board);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/board/:id', async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    if (!board) {
      return res.status(404).send();
    }
    res.send(board);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get('/board', async (req, res) => {
  try {
    const boards = Board.find({});
    res.send(boards);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

router.get('/board/:id', async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).send();
    }
    res.send(board);
  }
  catch (e) {
    res.status(500).send(e);
  }
});

export default router;
