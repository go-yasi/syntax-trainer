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

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}! Yay! You're amazing!`));
});
