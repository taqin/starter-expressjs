const User = require('../models/User');
/**
 * GET /account
 * Profile page.
 */
exports.getAccount = (req, res, next) => {
  res.render('index',
    {
      title: 'Express'
    });
};
