const express  = require('express');

const router = express.Router();

router.use('/users',require('./users'))

// router.use('/users',require('./posts'))

module.exports = router;