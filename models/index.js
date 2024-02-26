const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'artist',
});

User.hasMany(Comment, {
    foreignKey: 'artist',
});

Article.hasMany(Comment, {
    foreignKey: 'article_id',
});

Article.belongsTo(User, {
    foreignKey: 'artist',
});

Comment.belongsTo(User, {
    foreignKey: 'artist',
});

Comment.belongsTo(Article, {
    foreignKey: 'comment_id',
});

module.exports = { User, Article, Comment };