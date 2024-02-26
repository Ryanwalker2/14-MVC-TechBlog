const { Comment } = require('../models');

const commentData = [
    {
        artist: 'Ryan W',
        article_id: '1',
        creationDate: '02/02/02',
        description: 'Comment number 1',
    }, {
        artist: 'Ryan Walker',
        article_id: '1',
        creationDate: '03/03/03',
        description: 'Thank for the new comment!',
    }, {
        artist: 'Ryan Walk',
        article_id: '3',
        creationDate: '04/04/04',
        description: 'New comment number 3',
    }, {
        artist: 'Ryan',
        article_id: '2',
        creationDate: '02/04/24',
        description: 'New comment number 4',
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;