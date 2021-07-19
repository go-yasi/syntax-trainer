const router = require('express').Router();
const { Collection, Snippet } = require('../../models/');

// GET all homepage collections

router.get('/', async (req, res) => {
    try {
      const collectionData = await Collection.findAll({
        where: {homepage: true},
        include: [{ model: Snippet}]
      });
  
      if (!collectionData) {
        res.status(404).json({ message: 'No collection found with this id!' });
        return;
      }
  
      res.status(200).json(collectionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET collections by id

router.get('/:id', async (req, res) => {
    try {
      const collectionData = await Collection.findByPk(req.params.id, {
        include: [{ model: Snippet}]
      });
  
      if (!collectionData) {
        res.status(404).json({ message: 'No collection found with this id!' });
        return;
      }
  
      res.status(200).json(collectionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;