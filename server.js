const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = 4000;

// Controllers
const ctrl = require('./controllers');

// View Engine
app.set('view engine','ejs');

// Image Folder
app.use(express.static(`${__dirname}/public`));


// MiddleWare
// Method Override
app.use(methodOverride('_method'));

// Express BodyParser
app.use(express.urlencoded({extended: false}));



// Routes
app.get('/', (req,res) => {
  res.render('index');
});

// Admin Routes
app.use('/admin', ctrl.user);

// Server Listener
app.listen(PORT, ()=>{
  console.log(`This server is running on ${PORT}`);
})