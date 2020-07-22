const express = require('express');
const router = express.Router();
const db = require('../models/');

// Current Path /Admin

// Index Route
router.get('/', (req,res) => {
  db.User.find({}, (err, allUsers) => {
    if(err) return console.log(err);

    res.render('user/index', {
      users: allUsers,
    });

  })
});



router.post('/', function(req, res){
  db.User.create(req.body, (err, newUser) => {
      db.User.findByIdAndUpdate(req.params.id, {
          $push: {users: newUser}
      }, (err, updatedUser) => {
      
          res.redirect(`/`);
      })
  });
});


router.post('/users', (req, res) => {
  console.log('Request Body = ', req.body)
  
  db.User.create(req.body, (err, newUser) => {
      if(err) return console.log(err);
          db.User.findById(req.params._id, (err, foundUser) => {
              foundUser.users.push(newUser._id);
              foundUser.save((err, savedUser) => {
              console.log('savedUser: ', savedUser),

              res.redirect('/');
          });
      });
  });
});

module.exports = router;
