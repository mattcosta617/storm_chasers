const express = require('express');
const router = express.Router();
const db = require('../models');

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



router.post('/newuser', function(req, res){
  console.log(req.body.firstName);
  if(!req.body) return res.json({
    status: 500,
    message: "empty form"
  })
  db.User.create(req.body, (err, newUser) => {
    if(err) return console.log(err);
console.log(newUser);
    return res.json({
      status: 201,
      data: newUser,
    })

  });
});


router.get('/')




module.exports = router;
