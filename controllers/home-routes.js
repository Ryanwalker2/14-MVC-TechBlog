const router = require('express').Router();
const { Article, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbArticleData = await Article.findAll({
            exclude: [{
                attributes: ['id', 'comment_id'],
            }],
        });

        const articles = dbArticleData.map((article) => 
        article.get({ plain: true })
        );

        res.render('hoempage', {
            articles,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/article/:id', withAuth, async (req, res) => {
    try {
        const dbArticleData = await Article.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [
                        'id',
                        'username',
                    ],
                }, {
                    model: Comment,
                    attributes: [
                        'user_id',
                        'creationDate',
                        'description',
                    ],
                }
            ],
        });
        const Article = dbArticleData.get({ plain: true });
        res.render('article', { Article, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});