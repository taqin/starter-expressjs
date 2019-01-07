const { User } = require('../models/User');
/**
 * GET /account
 * Profile page.
 */
exports.getAccount = (req, res, next) => {
  User.find().then(item => {
    console.log(item);
    if (item !== null) {
      res.render('index',
      {
        title: 'Express',
        item
      });
    }
  })
  .catch ((error) => {
    res.status(500).send('Internal Server Error');
  });
  
};
