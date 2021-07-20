const sequelize = require('../config/connection');
const { Collection, User } = require('../models');

const collectionSeed = require('./collection.json');
const userSeed = require('./user.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Collection.bulkCreate(collectionSeed, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- COLLECTIONS SEEDED -----\n');

  await User.bulkCreate(userSeed, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  process.exit(0);

};

seedDatabase();
