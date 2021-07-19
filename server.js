const path = require('path');
const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const models = require('./models');
const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);
const {QueryTypes} = require('sequelize');

const app = express();
const PORT = process.env.PORT || 8888;

const sess = {
  secret: 'Very big but cool secret',
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get('/api/score/snippet/:id', async (req, res) => {
  try {
      const scoreData = await sequelize.query(
          `SELECT * FROM snippet
          INNER JOIN user ON user.id=snippet.user_id
          INNER JOIN score ON score.user_id=user.id
          WHERE snippet.id = ?`,
          {
            replacements: ['1'],
            type: QueryTypes.SELECT
          }
        );
      
      res.status(200).json(scoreData);
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}! Yay! You're amazing!`));
});
