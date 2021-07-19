const User = require('./User');
const Snippet = require('./Snippet');
const Collection = require('./Collection');
const Score = require('./Score');


User.belongsToMany(Snippet, {
    through: {
        model: Score,
        unique: false
    },
    as: 'user_score'
});

Snippet.belongsToMany(User, {
    through: {
        model: Score,
        unique: false
    },
    as: 'user_score'
});


/////////////////////////
// Snippet and Collection

Snippet.belongsTo(Collection, {
    foreignKey: 'collection_id'
});

Collection.hasMany(Snippet, {
    foreignKey: 'collection_id'
});


///////////////////
// User and Snippet
User.hasMany(Snippet, {
    foreignKey: 'user_id' 
});

Snippet.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, Snippet, Collection, Score };
