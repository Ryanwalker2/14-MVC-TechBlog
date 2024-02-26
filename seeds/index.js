const sequelize = require('../config/connection');
const seedArticle = require('./articleData');
const seedComments = require('./commentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedArticle();
    await seedComments();

    process.exit(0);
};

seedAll();