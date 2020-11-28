const app = require('express').Router();
module.exports = app;

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Home' });
});

app.get('/about', (req, res, next) => {
  res.render('about', { title: 'About' });
});

app.get('/test', (req, res, next) => {
  res.render('test', { title: 'Success' });
});
app.get('/new', (req, res, next) => {
  res.render('new', { title: 'New' });
});



