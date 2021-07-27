const router = require('express').Router();

const userRoutes = require('./userRoutes');
const snippetRoutes = require('./snippetRoutes');
const collectionRoutes = require('./collectionRoutes');
const scoreRoutes = require('./scoreRoutes');

router.use('/users', userRoutes);
router.use('/snippet', snippetRoutes);
router.use('/collection', collectionRoutes);
router.use('/score', scoreRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;