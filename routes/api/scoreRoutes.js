const router = require('express').Router();
const sequelize = require('../../config/connection');
const {QueryTypes} = require('sequelize');
const { Score, Snippet, User } = require('../../models');

// POST to create new score
router.post('/', async (req, res) => {
    try {
      const scoreData = await Score.create({...req.body});
      res.status(200).json(scoreData);
    } catch (err) {
      res.status(500).json(err);
    }
});

// GET to get all scores by user (map through to get highest score)
router.get('/snippet/:id', async (req, res) => {
    try {
        const scoreData = await sequelize.query(
            `SELECT * FROM snippet
            INNER JOIN user ON user.id=snippet.user_id
            INNER JOIN score ON score.user_id=user.id
            WHERE snippet.id = ?`,
            {
              replacements: [req.params.id],
              type: QueryTypes.SELECT
            }
          );
        
        res.status(200).json(scoreData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });


module.exports = router;