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


// new user posted to the admin page
router.post('/newuser', function(req, res){
  console.log(req.body.firstName);
  if(!req.body) return res.json({
    status: 500,
    message: "empty form"
  })
  db.User.create(req.body, (err, newUser) => {
    if(err) return console.log(err);
console.log(newUser);
    // return res.json({
    //   data: newUser,
    setTimeout(function() {
      res.redirect('/')
    }, 7000)
    })
  });
// });

// edit user

router.get('/:id', (req, res) => {
    db.User.findById(req.params.id, (err, editUser) => {
        if(err) return console.log(err);
            res.render('user/show', {
            user: editUser,
            });
        });
    });

router.put('/:id', (req, res) => {
    console.log('Updated User = ', req.body);

    db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedUser) => {

            res.redirect('/admin');
        }
    );
});


router.delete('/:id', (req, res) => {
    console.log('Deleting Solution = ', req.params.id);

  db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
      if(err) return  console.log(err);

      console.log("The Deleted User = ", deletedUser);
      res.redirect('/admin');
  });
});



module.exports = router;
