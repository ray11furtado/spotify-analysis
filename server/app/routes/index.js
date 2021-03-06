const router = require('express').Router();

module.exports = router;

router.use('/users', require('./users'));
router.use('/analyze', require('./analysis'));


router.use((req, res) => {
    res.status(404).end();
});
