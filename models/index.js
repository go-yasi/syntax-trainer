const User = require('./User');
const Snippet = require('./Snippet');
const Collection = require('./Collection');
const Score = require('./Score');

/////////////////
// User and Score
User.hasMany(Score, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Score.belongsTo(User, {
    foreignKey: 'user_id'
});


////////////////////
// Snippet and Score — SHOULD THIS RELATIONSHIP USE A THROUGH? OR ESTABLISH RELATIONSHIP FOR A THROUGH ABOVE?
Snippet.hasOne(Score, {
    
});

Score.belongsTo(Snippet, {
    
});


/////////////////////////
// Snippet and Collection
Snippet.belongsToMany(Collection, {
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
