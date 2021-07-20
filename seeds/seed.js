const sequelize = require('../config/connection');
const { Collection, Score, Snippet, User } = require('../models');

const collectionSeed = require('./collection.json');
const userSeed = require('./user.json');
// const snippetSeed = require('./snippet.json');
const scoreSeed = require('./score.json');

const seedDatabase = () => {
    return sequelize.sync({ force: true }).then(() => {
        Collection.bulkCreate(collectionSeed).then(() => {
            User.bulkCreate(userSeed).then(() => {
                // Snippet.bulkCreate(snippetSeed).then(() => {
                Score.bulkCreate(scoreSeed).then(() => {
                    console.log('All Seeds Planted');
                });
            });
        });
    });
};



seedDatabase();
