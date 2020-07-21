const express = require('express');
const router = express.Router();
const db = require('../models/User');

// Current Path /Admin

// Index Route
router.get('/', (req,res) => {
  res.render('index');
})


module.exports = router;
