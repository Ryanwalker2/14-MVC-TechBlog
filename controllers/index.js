const router = require('express').Router();

const userRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);
router.use('/api', userRoutes);

module.exports = router;