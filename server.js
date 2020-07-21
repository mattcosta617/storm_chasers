const express = require('express');
const app = express();
const PORT = 4000;

// View Engine
app.set('view engine','ejs');

// Image Folder
app.use(express.static(`${__dirname}/public`));

// Method Override
app.use(methodOverride('_method'));

// Controllers
const userCtrl = require('./controllers/UserController');

// Routes
app.get('/', (req,res) => {
  res.render('index');
});

// User Routes
app.use('/users', userCtrl)

// Server Listener
app.listen(PORT, ()=>{
  console.log(`This server is running on ${PORT}`);
})