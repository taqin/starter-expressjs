const express = require('express');
const router = express.Router();

const usersRouter = require('../controller/user');

/**
 * Primary app routes.
 */
router.get('/', usersRouter.getAccount);

module.exports = router;
