const router = require('express').Router();
const { Score, Snippet, User } = require('../../models');

// POST to create new score
router.post('/', async (req, res) => {
    try {
      const scoreData = await Score.create(req.body);
      res.status(200).json(scoreData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET to get all scores by user (map through to get highest score)
router.get('/:id', async (req, res) => {
    try {
        const scoreData = await Score.findAll({
            where: {snippet_id: req.params.id},
            include: [{ model: User }],
        });
        const score = scoreData.map((score) => 
        score.get({plain: true}));
        res.status(200).json(score);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;