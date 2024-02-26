const { Article } = require('../models');

const articleData = [
    {
        title: 'Blog Post 1',
        creationDate: '01/01/01',
        artist: 'Ryan Walker',
        description: 'This is the first blog post.',
        comment_id: [],
    }, {
        title: 'Blog Post 2',
        creationDate: '02/02/02',
        artist: 'Ryan Walk',
        description: 'This is the second blog post.',
        comment_id: [],
    }, {
        title: 'Blog Post 3',
        creationDate: '03/03/03',
        artist: 'Ryan W',
        description: 'This is the third blog post.',
        comment_id: [],
    }, {
        title: 'Blog Post 4',
        creationDate: '04/04/04',
        artist: 'Ryan',
        description: 'This is the fourth blog post.',
        comment_id: [],
    },
];

const seedArticle = () => Article.bulkCreate(articleData);

module.exports = seedArticle;