const express = require('express');
const router = express.Router();
const db = require('../models/');

// Current Path /Admin

// Index Route
router.get('/', (req,res) => {
  res.render('user/index');
})


router.post('/', (req, res) => {
  console.log('Request Body = ', req.body)
  
  db.User.create(req.body, (err, newUser) => {
      if(err) return console.log(err);
          db.User.findById(req.params._id, (err, foundUser) => {
              foundUser.users.push(newUser._id);
              foundUser.save((err, savedUser) => {
              console.log('savedUser: ', savedUser);

              res.redirect('/');
          });
      });
  });
});

module.exports = router;
