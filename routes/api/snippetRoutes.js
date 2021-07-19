const router = require('express').Router();
const { Snippet, User } = require('../../models');

// GET snippet by collection_id
router.get('/', async (req, res) => {
    try {
      const snippetData = await Snippet.findAll();
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET snippet by user
router.get('/user/:id', async (req, res) => {
    try {
      const snippetData = await Snippet.findByPk({
          includes: [{ model: User }]
      });
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// POST snippet by user
router.post('/', async (req, res) => {
    try {
      const snippetData = await Snippet.create(req.body);
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// DELETE snippet created by user
router.delete('/:id', async (req, res) => {
    try {
      const snippetData = await Snippet.destroy({
        where: { id: req.params.id }
      });
      if (!snippetData) {
        res.status(404).json({ message: 'No snippet with this id!' });
        return;
      }
      res.status(200).json(snippetData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;