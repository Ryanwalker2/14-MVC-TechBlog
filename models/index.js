const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
    foreignKey: 'article_id',
});

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

Article.hasMany(Comment, {
    foreignKey: 'comment_id',
});

Article.belongsTo(User, {
    foreignKey: 'artist',
});

Comment.belongsTo(User, {
    foreignKey: 'username',
});

Comment.belongsTo(Article, {
    foreignKey: 'comment_id',
});

module.exports = { User, Article, Comment };