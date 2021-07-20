const sequelize = require('../config/connection');
const { Score } = require('../models');

const scoreSeed = require('./score.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });

  await Score.bulkCreate(scoreSeed, {
    individualHooks: true,
    returning: true,
});
console.log('\n----- SCORES SEEDED -----\n');

process.exit(0);
};

seedDatabase();
